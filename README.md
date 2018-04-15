<!-- TOC -->

- [1. jsplumb 中文基础教程](#1-jsplumb-中文基础教程)
  - [1.1. 什么是jsplumb？](#11-什么是jsplumb)
  - [1.2. jsplumb能干什么？](#12-jsplumb能干什么)
  - [1.3. 基本概念](#13-基本概念)
- [2. 基础demos](#2-基础demos)
  - [2.1. 连接两个节点](#21-连接两个节点)
  - [2.2. 可拖动节点](#22-可拖动节点)
  - [2.3. 连接的其他参数](#23-连接的其他参数)
  - [2.4. 设置连接的默认值](#24-设置连接的默认值)
  - [2.5. 给连接加上样式](#25-给连接加上样式)
  - [2.6. 给连接加上箭头](#26-给连接加上箭头)
  - [2.7. 增加一个端点](#27-增加一个端点)
  - [2.8. 拖动创建连接](#28-拖动创建连接)
  - [2.9. 给端点增加样式](#29-给端点增加样式)
  - [2.10. 节点改变尺寸](#210-节点改变尺寸)
  - [2.11. 限制节点拖动区域](#211-限制节点拖动区域)
  - [2.12. 节点网格对齐](#212-节点网格对齐)
  - [2.13. 点击删除连线](#213-点击删除连线)
  - [2.14. 删除节点，包括节点相关的连接](#214-删除节点包括节点相关的连接)
  - [2.15. 通过编码连接endPoint](#215-通过编码连接endpoint)
- [3. 实战项目 一个可视化IVR编辑器](#3-实战项目-一个可视化ivr编辑器)
- [4. 参考资源](#4-参考资源)

<!-- /TOC -->

# 1. jsplumb 中文基础教程

在线地址：https://wdd.js.org/jsplumb-chinese-tutorial/

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
 /* global jsPlumb, $ */
    $('.item').resizable({
      resize: function (event, ui) {
        jsPlumb.repaint(ui.helper)
      },
      handles: 'all'
    })

    jsPlumb.ready(function () {
      jsPlumb.connect({
        source: 'item_left',
        target: 'item_right',
        endpoint: 'Rectangle'
      })

      jsPlumb.draggable('item_left', {containment: 'parent'})
      jsPlumb.draggable('item_right', {containment: 'parent'})
    })
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

## 2.13. 点击删除连线

```
// 单点击了连接线, 
jsPlumb.bind('click', function (conn, originalEvent) {
  if (confirm('确定删除所点击的链接吗？')) {
    jsPlumb.detach(conn)
  }
})
```

## 2.14. 删除节点，包括节点相关的连接

```
// nodeId为节点id, remove方法可以删除节点以及和节点相关的连线
jsPlumb.remove(nodeId)
```

注意remove方法有些情况下是无法删除干净连线的，[详情](https://jsplumbtoolkit.com/community/doc/removing.html)

## 2.15. 通过编码连接endPoint

初始化数据后，给节点加上了endPoint, 如果想编码让endPoint链接上。需要在addEndpoint时，就给该断点加上一个uuid, 然后通过connect()方法，将两个断点链接上。建议使用[node-uuid](https://github.com/kelektiv/node-uuid)给每个断点都加上唯一的uuid， 这样以后链接就方便多了。

```
jsPlumb.addEndpoint(id, {
    anchors: 'Top',
    uuid: uuid() // 这里需要唯一的一个Id, 
}, config)

jsPlumb.connect({ uuids: [fromId, toId] })
```

# 3. 实战项目 一个可视化IVR编辑器

项目地址：https://github.com/wangduanduan/visual-ivr 该项目还在开发完善中，不过已经具备基本功能。

![](http://p3alsaatj.bkt.clouddn.com/20180414105705_PbucQp_Jietu20180414-105646.jpeg)

# 4. 参考资源
- [jsPlumb Class](https://jsplumbtoolkit.com/community/apidocs/classes/jsPlumb.html)
- [freedevelopertutorials jsplumb-tutorial](http://www.freedevelopertutorials.com/jsplumb-tutorial/)