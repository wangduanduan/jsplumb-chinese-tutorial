var visoConfig = {
  visoTemplate: {}
}

visoConfig.visoTemplate.playAudioNode = '<div class="pa" id="{{id}}" style="top:{{top}}px;left:{{left}}px"><a class="btn btn-success" href="#" role="button">放音</a></div>'

// 基本连接线样式
visoConfig.connectorPaintStyle = {
  lineWidth: 4,
  strokeStyle: '#61B7CF',
  joinstyle: 'round',
  outlineColor: 'white',
  outlineWidth: 2
}

// 鼠标悬浮在连接线上的样式
visoConfig.connectorHoverStyle = {
  lineWidth: 4,
  strokeStyle: '#216477',
  outlineWidth: 2,
  outlineColor: 'white'
}

visoConfig.hollowCircle = {
  endpoint: ['Dot', { radius: 8 }],  // 端点的形状
  connectorStyle: visoConfig.connectorPaintStyle, // 连接线的颜色，大小样式
  connectorHoverStyle: visoConfig.connectorHoverStyle,
  paintStyle: {
    strokeStyle: '#1e8151',
    fillStyle: 'transparent',
    radius: 2,
    lineWidth: 2
  },        // 端点的颜色样式
  // anchor: "AutoDefault",
  isSource: true,    // 是否可以拖动（作为连线起点）
  connector: ['Flowchart', { stub: [40, 60], gap: 10, cornerRadius: 5, alwaysRespectStubs: true }],  // 连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
  isTarget: true,    // 是否可以放置（连线终点）
  maxConnections: -1,    // 设置连接点最多可以连接几条线
  connectorOverlays: [['Arrow', { width: 10, length: 10, location: 1 }]]
}

visoConfig.baseArchors = ['TopCenter', 'RightMiddle', 'BottomCenter', 'LeftMiddle']
