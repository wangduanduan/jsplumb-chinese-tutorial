/* global jsPlumb */
import CONFIG from './config.js'
import STYLE from './style.js'
const d = document

function setContainer () {
  jsPlumb.setContainer(CONFIG.jsplumbContainerId)
}

function innerInitHtml () {
  d.getElementById(CONFIG.jsplumbContainerId).innerHTML = CONFIG.beginNode + CONFIG.endNode
}

function initDraggable () {
  jsPlumb.draggable(queryItem(), {containment: true})
}

function queryItem (params) {
  return d.querySelectorAll(CONFIG.itemClass)
}

function initConnect () {
  jsPlumb.connect({
    source: 'begin',
    target: 'end',
    endpoint: 'Dot'
  }, STYLE.baseLineStyle)
}

function initEndpoint () {
  jsPlumb.addEndpoint(queryItem(), Object.assign({}, STYLE.baseEndpointStyle))
}

function importDefaults () {
  jsPlumb.importDefaults(Object.assign({}, STYLE.baseLineStyle))
}

export function initJsPlumb () {
  innerInitHtml()
  setContainer()
  importDefaults()
  initDraggable()
  initEndpoint()
}
