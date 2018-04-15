/* global $, visoConfig, Mustache, uuid, jsPlumb */

(function () {
  var area = 'drop-bg'
  var areaId = '#' + area
  var fixedNodeId = {
    begin: 'begin-node',
    end: 'end-node'
  }

  jsPlumb.ready(main)

  // 放入拖动节点
  function dropNode (template, position) {
    position.left -= $('#side-buttons').outerWidth()
    position.id = uuid.v1()
    var html = renderHtml(template, position)

    $(areaId).append(html)

    initSetNode(position.id)
  }

  // 初始化节点设置
  function initSetNode (id) {
    // jsPlumb.draggable(id, {containment: 'parent'})
    addDraggable(id)

    visoConfig.baseArchors.forEach(function (key) {
      jsPlumb.addEndpoint(id, {anchors: key}, visoConfig.hollowCircle)
    })

    // jsPlumb.addEndpoints(id, [{anchors: ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle']}], visoConfig.hollowCircle)
  }

  // 让元素可拖动
  function addDraggable (id) {
    jsPlumb.draggable(id, {containment: 'parent'})
  }

  // 渲染html
  function renderHtml (tpye, position) {
    return Mustache.render(visoConfig.visoTemplate[tpye], position)
  }

  // 主要入口
  function main () {
    jsPlumb.setContainer('diagramContainer')

    $('.btn-controler').draggable({
      helper: 'clone',
      scope: 'ss'
    })

    $(areaId).droppable({
      scope: 'ss',
      drop: function (event, ui) {
        dropNode(ui.draggable[0].dataset.template, ui.position)
      }
    })

    // 让退出节点可拖动
    addDraggable(fixedNodeId.end)
    initBeginNode()
    initEndNode()
  }

  // 获取基本配置
  function getBaseNodeConfig () {
    return Object.assign({}, visoConfig.hollowCircle)
  }

  // 初始化开始节点属性
  function initBeginNode () {
    var config = getBaseNodeConfig()

    config.isTarget = false
    config.maxConnections = 1

    jsPlumb.addEndpoint(fixedNodeId.begin, {anchors: 'Right'}, config)
  }

  // 初始化结束节点属性
  function initEndNode () {
    var config = getBaseNodeConfig()

    config.isSource = false

    jsPlumb.addEndpoint(fixedNodeId.end, {anchors: 'Left'}, config)
  }
})()

$('#right').droppable({
  scope: 'ss',
  drop: function (event, ui) {
    var left = parseInt(ui.offset.left - $(this).offset().left)
    var top = parseInt(ui.offset.top - $(this).offset().top)
    var name = ui.draggable[0].id
    switch (name) {
      case 'node1':
        i++
        var id = 'state_start' + i
        $(this).append('<div class="node" style="border-radius: 25em"  id="' + id + '" >' + $(ui.helper).html() + '</div>')
        $('#' + id).css('left', left).css('top', top)
        jsPlumb.addEndpoint(id, {
          anchors: 'TopCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'RightMiddle'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'BottomCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'LeftMiddle'
        }, hollowCircle)
        jsPlumb.draggable(id)
        $('#' + id).draggable({
          containment: 'parent'
        })
        doubleclick('#' + id)
        break
      case 'node2':
        i++
        id = 'state_flow' + i
        $(this).append("<div class='node' id='" + id + "'>" + $(ui.helper).html() + '</div>')
        $('#' + id).css('left', left).css('top', top)
        jsPlumb.addEndpoint(id, {
          anchors: 'TopCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'RightMiddle'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'BottomCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'LeftMiddle'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, hollowCircle)
        jsPlumb.draggable(id)
        $('#' + id).draggable({
          containment: 'parent'
        })
        doubleclick('#' + id)
        break
      case 'node3':
        i++
        id = 'state_decide' + i
        $(this).append("<div class='node' id='" + id + "'>" + $(ui.helper).html() + '</div>')
        $('#' + id).css('left', left).css('top', top)
        jsPlumb.addEndpoint(id, {
          anchors: 'TopCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'RightMiddle'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'BottomCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'LeftMiddle'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, hollowCircle)
        jsPlumb.draggable(id)
        $('#' + id).draggable({
          containment: 'parent'
        })
        doubleclick('#' + id)
        break
      case 'node4':
        i++
        id = 'state_end' + i
        $(this).append('<div class="node" style="border-radius: 25em"  id="' + id + '" >' + $(ui.helper).html() + '</div>')
        $('#' + id).css('left', left).css('top', top)
        jsPlumb.addEndpoint(id, {
          anchors: 'TopCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'RightMiddle'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'BottomCenter'
        }, hollowCircle)
        jsPlumb.addEndpoint(id, {
          anchors: 'LeftMiddle'
        }, hollowCircle)
        jsPlumb.draggable(id)
        $('#' + id).draggable({
          containment: 'parent'
        })
        doubleclick('#' + id)
        break
    }
  }
})
