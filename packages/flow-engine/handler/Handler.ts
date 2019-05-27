export const handlerNameSeparator = '$'

export function mapName2HandlerName(name: string) {
  let cleanName = name.replace(/[:!`~\^@*#¢¬ç?¦\|&;%@"<>\(\){}\[\]\+, \t\n]/g, '_')

  if (cleanName.match(/^[0-9]/)) {
    cleanName = '_' + cleanName
  }

  return cleanName
}

function stripBOM(moduleString: string) {
  // Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
  // because the buffer-to-string conversion in `fs.readFileSync()`
  // translates it to FEFF, the UTF-16 BOM.
  if (moduleString.charCodeAt(0) === 0xFEFF) {
    moduleString = moduleString.slice(1)
  }

  return moduleString
}

export function getHandlerFromString(moduleString: string) {
  const Module = require('module').Module
  const handlerModule = new Module()
  handlerModule._compile(stripBOM(moduleString))
  return handlerModule.exports
}

// @todo
export function getHandlerFromProcess(name: string, process: any) {
  const handlerName = mapName2HandlerName(name)
  const handler = process.eventHandler[handlerName]
  return handler
}

export function getHandlerFromFile(handlerFilePath: string) {
  return require(handlerFilePath)
}

// @todo
export function callHandler(name: string, process: any, data: any, handlerDoneCallback = () => { /**/}) {
  let result: any

  const eventType = 'callHandler'
  const handler = getHandlerFromProcess(name, process)
  const handlerType = typeof handler

  if (!handler) {
    process.callDefaultEventHandler(eventType, name, mapName2HandlerName(name), 'No handler found', handlerDoneCallback)
    return result
  }

  if (handlerType === 'function') {
    try {
      result = handler.call(process.processClient, data, handlerDoneCallback);
    } catch (error) {
      console.error("Error in handler '" + name + "': " + error.toString())
      process.defaultErrorHandler.call(process.processClient, error, handlerDoneCallback)
    }
  } else if (handlerType === 'object') {
    // @todo, 为了模拟子程序
    handlerDoneCallback()
  } else {
    process.callDefaultEventHandler(eventType, name, mapName2HandlerName(name),
      "Unknown handler type: '" + handlerType + "'", handlerDoneCallback)
  }

  return result
}
