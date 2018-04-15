export default {
  baseLineStyle: {
    paintStyle: {
      stroke: 'lightgray',
      strokeWidth: 4
    },
    endpointStyle: {
      fill: 'lightgray',
      outlineStroke: 'darkgray',
      outlineWidth: 1
    },
    overlays: [
      ['Arrow', {
        width: 12,
        length: 12,
        location: 0.61
      }]
    ]
  },
  baseEndpointStyle: {
    isSource: true,
    isTarget: true,
    connector: ['Bezier'],
    anchors: ['Right', 'Left', 'Top', 'Bottom']
  }
}
