# 1. jsplumb 中文基础教程

仓库地址：https://github.com/wangduanduan/jsplumb-chinese-tutorial.git

## 1.1. 什么是jsplumb？
你有没有想过在你的网站上展示图表或者甚至在浏览器应用程序中使用它？用jsPlumb你可以！它是完全免费的，并根据MIT许可证提供。您可以直接从jsPlumb github网站下载框架。

该项目主要由Simon Porritt开发，他在澳大利亚西德尼担任网络开发人员。 jsPlumb由他积极开发。作为许多优秀的开发人员，他似乎更喜欢开发代码而不是编写教程，这就是为什么我提供一个简单的入门教程。

![](http://p3alsaatj.bkt.clouddn.com/20180227184229_wKfyUd_jsPlumb_Diagram_Example.jpeg)

## 1.2. jsplumb能干什么？

那么如果你应该使用它取决于你想用jsPlumb做什么。该框架适用于必须绘制图表的Web应用程序，例如类似于Visio的应用程序或工作流程设计器等。由于图表项目和连接的所有参数都是非常精细可控的，因此您可以绘制您可以想到的任何类型的图表的！

## 1.3. 基本概念

- Souce 源节点
- Target 目标节点
- Anchor 锚点
- Endpoint 端点
- Connector 连接

![](http://p3alsaatj.bkt.clouddn.com/20180227151857_Pu4O9c_jsPlumb-Connector-Components.jpeg)


# 2. 基础demos
`注意：点击标题即可查看demo的在线效果`

## 2.1. 连接两个节点

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/01.html

jsPlumb.ready方法和jquery的ready方法差不多的功能，jsPlumb.connect用于建立连线

![](http://p3alsaatj.bkt.clouddn.com/20180415224517_SK0PUc_Jietu20180415-224454.jpeg)


```
<div id="diagramContainer">
    <div id="item_left" class="item"></div>
    <div id="item_right" class="item" style="margin-left:50px;"></div>
  </div>
  <script src="https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js"></script>

  <script>
    /* global jsPlumb */
    jsPlumb.ready(function () {
      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Dot'
      })
    })
  </script>
```


参数说明：
jsPlumb.connect(config) return connection

参数 | 参数类型 | 是否必须 | 说明
---|---|---|---
source | String,Object,Endpoint | 是 | 连线源的标识，可以是id, element, 或者Endpoint
target | String,Object,Endpoint | 是 | 连线目标的标识，可以是id, element, 或者Endpoint
endpoint | String | 可选 | 端点类型，形状

[>>> connect方法详情](https://jsplumbtoolkit.com/community/apidocs/classes/jsPlumbInstance.html#method_connect)


## 2.2. 可拖动节点

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/02.html

使用draggable可以让节点被拖动，[draggable方法参考](https://jsplumbtoolkit.com/community/apidocs/classes/jsPlumbInstance.html#method_draggable)

![](http://p3alsaatj.bkt.clouddn.com/20180227191655_GOJLi1_Jietu20180227-191647.jpeg)

```
<div id="diagramContainer">
    <div id="item_left" class="item"></div>
    <div id="item_right" class="item" style="left:150px;"></div>
  </div>
  <script src="https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js"></script>

  <script>
    /* global jsPlumb */
    jsPlumb.ready(function () {
      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Rectangle'
      })

      jsPlumb.draggable('item_left')
      jsPlumb.draggable('item_right')
    })
  </script>
```



## 2.3. 连接的其他参数

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/03.html

可以通过connector去设置链接线的形状，如直线或者曲线之类的。anchor可以去设置锚点的位置。

![](http://p3alsaatj.bkt.clouddn.com/20180227192135_1AWJH6_Jietu20180227-192120.jpeg)

```
<div id="diagramContainer">
    <div id="item_left" class="item"></div>
    <div id="item_right" class="item" style="left:150px;"></div>
  </div>
  <script src="https://cdn.bootcss.com/jsPlumb/2.6.8/js/jsplumb.min.js"></script>

  <script>
    /* global jsPlumb */
    jsPlumb.ready(function () {
      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Rectangle',
        connector: ['Bezier'],
        anchor: ['Left', 'Right']
      })

      jsPlumb.draggable('item_left')
      jsPlumb.draggable('item_right')
    })
  </script>
```

## 2.4. 设置连接的默认值

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/04.html 

很多连线都是相同设置的情况下，可以将配置抽离出来，作为一个单独的变量，作为connect的第二个参数传入。实际上connect的第二个参数会和第一个参数merge，作为一个整体。

```
<script>
    /* global jsPlumb */
    jsPlumb.ready(function () {
      var common = {
        endpoint: 'Rectangle',
        connector: ['Bezier'],
        anchor: ['Left', 'Right']
      }

      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right'
      }, common)

      jsPlumb.draggable('item_left')
      jsPlumb.draggable('item_right')
    })
  </script>
```

## 2.5. 给连接加上样式

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/05.html

例如给连线设置不同的颜色，设置不同的粗细之类的。

![](http://p3alsaatj.bkt.clouddn.com/20180227192811_AA9fXd_Jietu20180227-192758.jpeg)

```
jsPlumb.connect({
  source: 'item_left',
  target: 'item_right',
  paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
  endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 }
}, common)
```

## 2.6. 给连接加上箭头

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/06.html

箭头实际上是通过设置`overlays`去设置的，可以设置箭头的长宽以及箭头的位置，location 0.5表示箭头位于中间，location 1表示箭头设置在连线末端。 一根连线是可以添加多个箭头的。

![](http://p3alsaatj.bkt.clouddn.com/20180227193801_OejsPz_Jietu20180227-193752.jpeg)

```
jsPlumb.connect({
  source: 'item_left',
  target: 'item_right',
  paintStyle: { stroke: 'lightgray', strokeWidth: 3 },
  endpointStyle: { fill: 'lightgray', outlineStroke: 'darkgray', outlineWidth: 2 },
  overlays: [ ['Arrow', { width: 12, length: 12, location: 0.5 }] ]
}, common)
```

## 2.7. 增加一个端点

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/07.html

addEndpoint方法可以用来增加端点，[具体使用请看](https://jsplumbtoolkit.com/community/apidocs/classes/jsPlumbInstance.html#method_addEndpoint)

![](http://p3alsaatj.bkt.clouddn.com/20180227193308_wYaELY_Jietu20180227-193254.jpeg)

```
    jsPlumb.ready(function () {
      jsPlumb.addEndpoint('item_left', {
        anchors: ['Right']
      })
    })
```

## 2.8. 拖动创建连接

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/08.html

如果你将`isSource`和`isTarget`设置成true，那么久可以用户在拖动时，自动创建链接。

![](http://p3alsaatj.bkt.clouddn.com/20180227193546_yg6Z4L_Jietu20180227-193527.jpeg)

```
jsPlumb.ready(function () {
      jsPlumb.setContainer('diagramContainer')

      var common = {
        isSource: true,
        isTarget: true,
        connector: ['Straight']
      }

      jsPlumb.addEndpoint('item_left', {
        anchors: ['Right']
      }, common)

      jsPlumb.addEndpoint('item_right', {
        anchor: 'Left'
      }, common)

      jsPlumb.addEndpoint('item_right', {
        anchor: 'Right'
      }, common)
    })
```

`一般来说拖动创建的链接，可以再次拖动，让链接断开。如果不想触发这种行为，可以设置。`

```
  jsPlumb.importDefaults({
    ConnectionsDetachable: false
  })
```

## 2.9. 给端点增加样式

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/09.html

通过设置各种 `*Style`来改变链接或者端点的样式。


![](http://p3alsaatj.bkt.clouddn.com/20180227194136_zIlkwP_Jietu20180227-194127.jpeg)

```
jsPlumb.ready(function () {
      jsPlumb.setContainer('diagramContainer')

      var common = {
        isSource: true,
        isTarget: true,
        connector: 'Straight',
        endpoint: 'Dot',
        paintStyle: {
          fill: 'white',
          outlineStroke: 'blue',
          strokeWidth: 3
        },
        hoverPaintStyle: {
          outlineStroke: 'lightblue'
        },
        connectorStyle: {
          outlineStroke: 'green',
          strokeWidth: 1
        },
        connectorHoverStyle: {
          strokeWidth: 2
        }
      }

      jsPlumb.addEndpoint('item_left', {
        anchors: ['Right']
      }, common)

      jsPlumb.addEndpoint('item_right', {
        anchor: 'Left'
      }, common)

      jsPlumb.addEndpoint('item_right', {
        anchor: 'Right'
      }, common)
    })
```

## 2.10. 节点改变尺寸

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/10.html

jsplumb实际上不支持改变节点大小，实际上只能通过jquery ui resizable 方法去改变。

![](http://p3alsaatj.bkt.clouddn.com/20180227195351_B18Pal_Jietu20180227-195338.jpeg)

```
<div id="diagramContainer">
    <div id="item_left" class="item"></div>
    <div id="item_right" class="item" style="left:150px;"></div>
  </div>
  <script src="https://code.jquery.com/jquery-1.11.3.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script src="./lib/jquery.jsplumb.js"></script>

  <script>
    /* global jsPlumb, $ */
    $('.item').resizable({
      resize: function (event, ui) {
        jsPlumb.repaint(ui.helper)
      }
    })

    jsPlumb.ready(function () {
      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Rectangle'
      })

      jsPlumb.draggable('item_left')
      jsPlumb.draggable('item_right')
    })
  </script>
```

## 2.11. 限制节点拖动区域

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/11.html

默认情况下，节点可以被拖动到区域外边，如果想只能在区域内拖动，需要设置containment，这样节点只能在固定区域内移动。


![](http://p3alsaatj.bkt.clouddn.com/20180227195859_fFawMs_Jietu20180227-195844.jpeg)

```
jsPlumb.setContainer('area-id')
```

## 2.12. 节点网格对齐

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/12.html
网格对齐实际上是设置了`grid`属性，使移动只能按照固定的尺寸移动。然后用一张图作为背景铺开作为网格来实现的。

![](http://p3alsaatj.bkt.clouddn.com/20180227200100_wEX1FU_Jietu20180227-200047.jpeg)

```
#diagramContainer {
  padding: 20px;
  width: 80%;
  height: 400px;
  border: 1px solid gray;
  background-image: url(http://p3alsaatj.bkt.clouddn.com/20180227163310_1bVYeW_grid.jpeg);
  background-repeat: repeat;
}

jsPlumb.draggable('item_left', {
  containment: 'parent',
  grid: [10, 10]
})
```

## 2.13. 给链接添加点击事件：点击删除连线

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/13.html

![](http://p3alsaatj.bkt.clouddn.com/20180713130405_UnzvUT_Jietu20180713-130335.jpeg)

```
// 请单点击一下连接线, 
jsPlumb.bind('click', function (conn, originalEvent) {
  if (window.prompt('确定删除所点击的链接吗？ 输入1确定') === '1') {
    jsPlumb.detach(conn)
  }
})
```

jsPlumb支持许多事件

`jsPlumb Events列表`

- connection
- connectionDetached
- connectionMoved
- click
- dblclick
- endpointClick
- endpointDblClick
- contextmenu
- beforeDrop
- beforeDetach
- zoom
- Connection Events
- Endpoint Events
- Overlay Events
- Unbinding Events

参考用法参考：https://jsplumbtoolkit.com/community/doc/events.html#jsPlumbEvents

## 2.14. 删除节点，包括节点相关的连接

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/14.html

![](http://p3alsaatj.bkt.clouddn.com/20180713131254_dLSYLW_Jietu20180713-131238.jpeg)

```
// nodeId为节点id, remove方法可以删除节点以及和节点相关的连线
console.log('3 秒后移除左边节点包括它的连线')
setTimeout(function () {
  jsPlumb.remove('item_left')
}, 3000)
```

注意remove方法有些情况下是无法删除干净连线的，[详情](https://jsplumbtoolkit.com/community/doc/removing.html)

## 2.15. 通过编码连接endPoint

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/15.html

![](http://p3alsaatj.bkt.clouddn.com/20180713132452_xkiWxs_Jietu20180713-132430.jpeg)

初始化数据后，给节点加上了endPoint, 如果想编码让endPoint链接上。需要在addEndpoint时，就给该断点加上一个uuid, 然后通过connect()方法，将两个断点链接上。建议使用[node-uuid](https://github.com/kelektiv/node-uuid)给每个断点都加上唯一的uuid， 这样以后链接就方便多了。

```
jsPlumb.addEndpoint('item_left', {
  anchors: ['Right'],
  uuid: 'fromId'
})

jsPlumb.addEndpoint('item_right', {
  anchors: ['Left'],
  uuid: 'toId'
})

console.log('3 秒后建立连线')
setTimeout(function () {
  jsPlumb.connect({ uuids: ['fromId', 'toId'] })
}, 3000)
```

## 2.16. 连接前的检查，判断是否建立连接

demo: https://wdd.js.org/jsplumb-chinese-tutorial/demos/16.html

![](http://p3alsaatj.bkt.clouddn.com/20180713133303_xif4MK_Screenshot.jpeg)

有时候当用户从A端点链接到B端点时，需要做一些检查，如果不符合条件，就不让链接建立。

```
// 当链接建立前
jsPlumb.bind('beforeDrop', function (info) {
  var a = 10
  var b = 2
  if (a < b) {
    console.log('链接会自动建立')
    return true // 链接会自动建立
  } else {
    console.log('链接取消')
    return false // 链接不会建立，注意，必须是false
  }
})
```

# 3. jsPlumb默认配置简介

参考地址: https://jsplumbtoolkit.com/community/doc/defaults.html

jsPlumb的配置项有很多，如果你不主动去设置，那么jsPlumb就使用默认的配置。

```
Anchor : "BottomCenter",
Anchors : [ null, null ],
ConnectionsDetachable   : true,
ConnectionOverlays  : [],
Connector : "Bezier",
Container : null,
DoNotThrowErrors  : false,
DragOptions : { },
DropOptions : { },
Endpoint : "Dot",
Endpoints : [ null, null ],
EndpointOverlays : [ ],
EndpointStyle : { fill : "#456" },
EndpointStyles : [ null, null ],
EndpointHoverStyle : null,
EndpointHoverStyles : [ null, null ],
HoverPaintStyle : null,
LabelStyle : { color : "black" },
LogEnabled : false,
Overlays : [ ],
MaxConnections : 1,
PaintStyle : { strokeWidth : 8, stroke : "#456" },
ReattachConnections : false,
RenderMode : "svg",
Scope : "jsPlumb_DefaultScope"
```

你也可以从`jsPlumb.Defaults`对象中查看默认的配置。如果你想要更加个性化的设置连线，那么最好可以了解一下，它的默认设置有哪些，从而方便的来完成自己的设计需求。

![](http://p3alsaatj.bkt.clouddn.com/20180509225507_aRk1UV_Jietu20180509-225433.jpeg)

默认参数的简介:

- `Anchor` 锚点，即端点链接的位置
- `Anchors` 多个锚点 [源锚点，目标锚点].
- `Connector` 链接
- `ConnectionsDetachable` 节点是否可以用鼠标拖动使其断开，默认为true。即用鼠标链接上的连线，也可以使用鼠标拖动让其断开。设置成false，可以让其拖动也不会自动断开。
- `Container` 连线的容器
- `DoNotThrowErrors` 是否抛出错误
- `ConnectionOverlays` 链接遮罩层
- `DragOptions` 拖动设置
- `DropOptions` 拖放设置
- `Endpoint` 端点
- `Endpoints` 数组形式的，[源端点，目标端点] 
- `EndpointOverlays` 端点遮罩层
- `EndpointStyle` 端点样式
- `EndpointStyles` [源端点样式，目标端点样式]
- `EndpointHoverStyle` 端点鼠标经过的样式
- `EndpointHoverStyles` [源端点鼠标经过样式，目标端点鼠标经过样式]
- `HoverPaintStyle` 鼠标经过链接线时的样式
- `LabelStyle` 标签样式
- `LogEnabled` 是否启用日志
- `Overlays` 连接线和端点的遮罩层样式
- `MaxConnections` 端点最大连接线数量默认为1， 设置成-1可以表示无数个链接
- `PaintStyle` 连线样式
- `ReattachConnections` 端点是否可以再次重新链接
- `RenderMode` 渲染模式，默认是svg
- `Scope` 作用域，用来区分哪些端点可以链接，作用域相同的可以链接

```
// 可以使用importDefaults，来重写某些默认设置
jsPlumb.importDefaults({
  PaintStyle : {
    strokeWidth:13,
    stroke: 'rgba(200,0,0,0.5)'
  },
  DragOptions : { cursor: "crosshair" },
  Endpoints : [ [ "Dot", { radius:7 } ], [ "Dot", { radius:11 } ] ],
  EndpointStyles : [{ fill:"#225588" }, { fill:"#558822" }]
});
```

# 4. 有没有稍微复杂一点，带有拖放的栗子？
项目地址：https://github.com/wangduanduan/visual-ivr ，将views目录下的drag-drop-demo.html拖放到浏览器中，就可以愉快的玩耍了。

从该demo中除了可以学到基本的jsplumb的api, 也可以学到其他的关于拖放的知识点。其中目前只做了语音节点的拖放，其他的还时间做。该demo没有使用webpack打包，代码写的有点乱，大家凑合着看，有问题可以提issue, 或者评论。

![](http://p3alsaatj.bkt.clouddn.com/20180425224658_pFg6BG_Jietu20180425-224640.jpeg)

# 5. 实战项目 一个可视化IVR编辑器

项目地址：https://github.com/wangduanduan/visual-ivr 该项目还在开发完善中，不过已经具备基本功能。

该项目是用webpack打包的项目，所有文件都在src目录下。

图1是基于jsplumb做的最基础的版本，图2是最近优化后的版本，该版本未开源。

![](http://p3alsaatj.bkt.clouddn.com/20180414105705_PbucQp_Jietu20180414-105646.jpeg)

【图1】


![](http://p3alsaatj.bkt.clouddn.com/20180628154158_hryb52_Jietu20180628-153918.jpeg)
【图2】

# 6. 还有哪些类似的图形连线可视化项目

## 6.1. G6 AntV 

https://github.com/antvis/g6

![](http://p3alsaatj.bkt.clouddn.com/20180611171335_XWq41h_Jietu20180611-171327.jpeg)

## 6.2. VivaGraphJS 

https://github.com/anvaka/VivaGraphJS

![](http://p3alsaatj.bkt.clouddn.com/20180611171125_1LBQdG_Jietu20180611-171117.jpeg)

![](http://p3alsaatj.bkt.clouddn.com/20180611171745_mwZc75_Jietu20180611-171731.jpeg)

## 6.3. springy 

https://github.com/dhotson/springy

![](http://p3alsaatj.bkt.clouddn.com/20180611171213_XS3vL4_Jietu20180611-171206.jpeg)

## 6.4 graphviz

https://www.graphviz.org/about/

中文有个基本的介绍文档写的不错，参考：https://casatwy.com/shi-yong-dotyu-yan-he-graphvizhui-tu-fan-yi.html

graphviz可以把你写的.dot文件渲染成一张图。

mac上首先要安装：`brew install graphviz`

然后如果你用vscode的话，vscode上又graphviz的扩展插件，可以预览你的dot文件。

总体来说，graphviz的功能十分强大，同时它也提供了其他语言的脚本api来方便绘图。总之，如果你不想通过拖拉拽来绘制一些流程图，又对图形布局不是很感兴趣的话，`graphviz是一个免费而且效率高而且能装逼的工具`

![](http://p3alsaatj.bkt.clouddn.com/20180626102133_EAJjjY_Jietu20180626-102115.jpeg)

再贴几张graphviz的绘图

![](http://p3alsaatj.bkt.clouddn.com/20180626102608_hCABQQ_summary.jpeg)

![](http://p3alsaatj.bkt.clouddn.com/20180626102646_RPHmnl_example5.jpeg)

![](http://p3alsaatj.bkt.clouddn.com/20180626102701_S66sli_petrol.jpeg)

![](http://p3alsaatj.bkt.clouddn.com/20180626102715_wPb7pW_dfd2.jpeg)


## 6.5 visjs

http://visjs.org/index.html

该项目看起来不错，github上将近有7000 star, 但是它的开发者似乎没时间维护该项目了，正在给该项目找下家。

![](http://p3alsaatj.bkt.clouddn.com/20180816163348_S3yJbT_Jietu20180816-163228.jpeg)




# 7. 参考资源
- [jsPlumb Class](https://jsplumbtoolkit.com/community/apidocs/classes/jsPlumb.html)
- [freedevelopertutorials jsplumb-tutorial](http://www.freedevelopertutorials.com/jsplumb-tutorial/)