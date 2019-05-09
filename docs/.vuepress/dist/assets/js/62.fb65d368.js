(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{537:function(t,a,s){"use strict";s.r(a);var e=s(5),v=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"networks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#networks","aria-hidden":"true"}},[t._v("#")]),t._v(" Networks")]),t._v(" "),s("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}}),t._v(" "),s("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}}),t._v(" "),s("p",[t._v("Four Layers of TCP/IP model.")]),t._v(" "),s("h2",{attrs:{id:"ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip","aria-hidden":"true"}},[t._v("#")]),t._v(" IP")]),t._v(" "),s("p",[t._v("IP 是网络层（数据包）协议，分为 IPv4 和 IPv6。")]),t._v(" "),s("h3",{attrs:{id:"ip-地址的长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址的长度","aria-hidden":"true"}},[t._v("#")]),t._v(" IP 地址的长度")]),t._v(" "),s("p",[t._v("IPv4 长度是 32位，是 4 组 8 位二进制，可以用点分十进制表示，如 "),s("code",[t._v("255.255.255.255")]),t._v(", 用二进制表示就是 "),s("code",[t._v("11111111 11111111 11111111 11111111")]),t._v(", 即 32 位。")]),t._v(" "),s("p",[t._v("IPv6 长度是 128 位，由 8 个字段组成，每一块都表示四个 16 进制数，如 "),s("code",[t._v("ABCD:EF01:2345:6789:ABCD:EF01:2345:6789")]),t._v(", 最大地址个数为 2^32 个。一个 16(0 - F) 进制由 4 位二进制表示，一个字段长度为 16 字节，总长度 16 * 8 = 128 字节。")]),t._v(" "),s("h3",{attrs:{id:"ip-地址的类别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址的类别","aria-hidden":"true"}},[t._v("#")]),t._v(" IP 地址的类别")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("类别")]),t._v(" "),s("th",[t._v("网段")]),t._v(" "),s("th",[t._v("区分")]),t._v(" "),s("th",[t._v("地址范围")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("A")]),t._v(" "),s("td",[t._v("0~127")]),t._v(" "),s("td",[t._v("二进制首位为0")]),t._v(" "),s("td",[t._v("1.0.0.1~127.255.255.254")])]),t._v(" "),s("tr",[s("td",[t._v("B")]),t._v(" "),s("td",[t._v("128~191")]),t._v(" "),s("td",[t._v("二进制首位为10")]),t._v(" "),s("td",[t._v("172.16.0.0~172.31.255.254")])]),t._v(" "),s("tr",[s("td",[t._v("C")]),t._v(" "),s("td",[t._v("192~223")]),t._v(" "),s("td",[t._v("二进制首位为110")]),t._v(" "),s("td",[t._v("192.168.0.1~192.168.255.254")])]),t._v(" "),s("tr",[s("td",[t._v("D")]),t._v(" "),s("td",[t._v("224~239")]),t._v(" "),s("td",[t._v("二进制首位为1110")]),t._v(" "),s("td",[t._v("224.0.0.0~239.255.255.254")])]),t._v(" "),s("tr",[s("td",[t._v("E")]),t._v(" "),s("td",[t._v("240~255")]),t._v(" "),s("td",[t._v("二进制首位为1111")]),t._v(" "),s("td",[t._v("240.0.0.0~255.255.255.255")])])])]),t._v(" "),s("h2",{attrs:{id:"tcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP")]),t._v(" "),s("p",[t._v("TCP 和 IP 的关系：IP 数据包分为 IP 头部和 IP 数据部分，IP 数据部分中包括 TCP 头部加 TCP 数据部分。")]),t._v(" "),s("h3",{attrs:{id:"questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#questions","aria-hidden":"true"}},[t._v("#")]),t._v(" Questions")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.saminiir.com/lets-code-tcp-ip-stack-3-tcp-handshake/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code TCP/IP stack"),s("OutboundLink")],1)]),t._v(" "),s("ol",[s("li",[s("p",[t._v("How long should the sender wait for an acknowledgement from the receiver?")])]),t._v(" "),s("li",[s("p",[t._v("What if the receiver cannot process data as fast as it is sent?")]),t._v(" "),s("p",[t._v("Flow control is required, when the receiver cannot process data as fast it is sent.")])]),t._v(" "),s("li",[s("p",[t._v("What if the network in between (a router, for example) cannot process data as fast as it is sent?")])])]),t._v(" "),s("h3",{attrs:{id:"tcp-basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-basics","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP Basics")]),t._v(" "),s("p",[t._v("TCP 是一个面向连接(connection-oriented)的协议。")]),t._v(" "),s("p",[t._v("TCP 的可靠基于超时和重传策略。")]),t._v(" "),s("p",[t._v("TCP 是一个流协议，所以当丢包、包乱序或者包损坏时会 buffer 数据，直到把完整的数据发送给应用层的 socket.")]),t._v(" "),s("p",[t._v("TCP header 中保存着在流中的 index,  这使得流可以分割为若干个段(segments), 而 TCP 可以重新打包它们。")]),t._v(" "),s("p",[t._v("如果 TCP 收到了被损坏的包或者段，直接丢弃之而不需要通知发送端；发送端未收到接收端的 ack 的话，则会重传。")]),t._v(" "),s("h3",{attrs:{id:"tcp-四层模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四层模型","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 四层模型")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("层数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("应用层")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("FTP 协议(21 连接, 20 传输)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("运输层")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("TCP 协议，在不可靠的 IP 层上，提供了一个可靠的运输层，为了提供这种可靠的服务，TCP采用了超时重传、发送和接受端到端的确认分组等机制。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("网络层")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IP 协议，提供的是一种不可靠的服务。它只是尽可能快地把分组从源节点送到目的节点，但不提供任何可靠性的保证。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("链路层")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("以太网协议、令牌环协议")])])])]),t._v(" "),s("p",[t._v("对比 OSI 的七层模型：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("OSI 七层模型")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("应用层")]),t._v(" "),s("td",[t._v("HTTP, FTP, SMTP, POP3…等应用程序协议，SNMP，SOCKET, S-HTTP 等；计算机用户以及各种应用程序和网络之间的接口。")])]),t._v(" "),s("tr",[s("td",[t._v("表示层")]),t._v(" "),s("td",[t._v("信息的语法已经它们的关联，加密解密，压缩解压缩等")])]),t._v(" "),s("tr",[s("td",[t._v("会话层")]),t._v(" "),s("td",[t._v("不同用户机器上的用户之间建立以及管理会话，安全协议，目录访问协议")])]),t._v(" "),s("tr",[s("td",[t._v("传输层")]),t._v(" "),s("td",[t._v("TCP,UDP；OSI的下三层的主要任务是数据传输，上三层的主要任务是数据处理；该层的作用是保证"),s("strong",[t._v("报文")]),t._v("的正确传输；功能有传输连接管理、处理传输差错。")])]),t._v(" "),s("tr",[s("td",[t._v("网络层")]),t._v(" "),s("td",[t._v("IP/IPv6, ICMP, IGMP, 控制子网的运行，如逻辑编址、分组传说、路由选择；将数据链路层的数据转化成"),s("strong",[t._v("数据包")]),t._v("，通过路径选择、分段组合、顺序、进出路由控制等，将信息从一个网络设备传送到另一个网络设备，解决同意网络内节点之间的通信")])]),t._v(" "),s("tr",[s("td",[t._v("链路层")]),t._v(" "),s("td",[t._v("物理寻址，同时将原始比特流转变为逻辑传输线路; 通过各种控制协议，将有差错的物理信道变为无差错的、能可靠传输数据帧的数据链路; 将物理层的数据封装成"),s("strong",[t._v("帧")]),t._v("，传送到上一层，或者将上一层的数据帧拆装为位流形式转发到物理层。")])]),t._v(" "),s("tr",[s("td",[t._v("物理层")]),t._v(" "),s("td",[t._v("原始比特流传输，IEEE 802.2, Ethernet v2, Internetwork")])])])]),t._v(" "),s("h3",{attrs:{id:"tcp-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-header","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP Header")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("        0                            15                              31\n       -----------------------------------------------------------------\n       |          source port          |       destination port        |\n       -----------------------------------------------------------------\n       |                        sequence number                        |\n       -----------------------------------------------------------------\n       |                     acknowledgment number                     |\n       -----------------------------------------------------------------\n       |  HL   | rsvd  |C|E|U|A|P|R|S|F|        window size            |\n       -----------------------------------------------------------------\n       |         TCP checksum          |       urgent pointer          |\n       -----------------------------------------------------------------\n")])])]),s("p",[t._v("对于 "),s("code",[t._v("sequence number")]),t._v(" 而言，the Sequence Number represents the TCP segment’s window index, "),s("strong",[t._v("握手是存储的是 ISN(Initial Sequence Number).")])]),t._v(" "),s("p",[t._v("ACK 段包含了发送端希望接收的下一个字节的窗口索引，握手过后 ACK 这段始终不能为空。")]),t._v(" "),s("p",[t._v("HL 表示 Header Length，其他字段含义如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("标志位")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Congestion Window Reduced (C)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("发送端降低发送速率")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("ECN Echo (E)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("发送端收到拥塞通知")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("Urgent Pointer (U)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("段中包含优先级数据")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("ACK (A)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("握手时状态，连接保持时一直保持 on 的状态")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("PSH (P)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("接收端应该尽快将数据推 (PUSH) 向应用层")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("RST (R)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("重置 TCP 连接")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("SYN (S)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("握手时同步 ISN")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("FIN (F)")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("发送端终止"),s("strong",[t._v("发送")]),t._v("数据")])])])]),t._v(" "),s("p",[t._v("window size 是表示接收端可以接受的字节大小，16-bit 位最大可以接收 65536 字节的数据。")]),t._v(" "),s("p",[t._v("TCP checksum 用于检验 TCP 数据段的完整性。")]),t._v(" "),s("p",[t._v("Urgent Pointer 表示 U 状态位打开的话，该字段用于表示优先级数据（紧急数据）在流中的位置。")]),t._v(" "),s("p",[t._v("FIN 一般是应用层主动关闭的结果，TCP 不背锅。")]),t._v(" "),s("p",[t._v("以上就是报头的信息，报头后面也可以提供若干选项，最大 40 字节，例如:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("MSS(Maximum Segment Size) 最大报文长度")]),t._v(" "),s("p",[t._v("发送端通知另一端数据段的最大值，对于一个以太网，IPV4 指定的是 1460 字节(bytes), MSS = 1500(MTU) - 20(IP) - 20(TCP) = 1460B.")]),t._v(" "),s("p",[t._v("PMTU: 两个端点之间的若干个 MTU 值计算出来的 MTU值。")]),t._v(" "),s("p",[t._v("如果一方不接收来自另一方的 MSS 值，则 MSS 就定为默认的 536 字节(非本地的默认值，根据 IP 和子网判断是不是本地)。")])]),t._v(" "),s("li",[s("p",[t._v("Selective Acknowledgment (SACK)")]),t._v(" "),s("p",[t._v("SACK 用于传输过程中大量丢包的情况，这样会导致吞吐率下降，利用这种方式通知发送端。")])]),t._v(" "),s("li",[s("p",[t._v("Window Scale")]),t._v(" "),s("p",[t._v("发送端和接收端都包含此字段，则成倍增加滑动窗口大小，有利于容量较大的数据的传输。")])]),t._v(" "),s("li",[s("p",[t._v("Timestamps")]),t._v(" "),s("p",[t._v("在 TCP 数据段添加一个时间戳，用于计算每一个 ACK 的 RTT(往返延迟时间 Round-Trip Time), 也可以用来计算 TCP 的超时重传。")]),t._v(" "),s("p",[t._v("TCP的 RTO（重传超时时间）值的计算方法：")]),t._v(" "),s("ul",[s("li",[t._v("RFC793：使用低通过滤器来更新一个平滑的 RTT 值。")]),t._v(" "),s("li",[t._v("Jacobson 1988: "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mi",[t._v("R")]),s("mi",[t._v("T")]),s("mi",[t._v("O")]),s("mo",[t._v("=")]),s("mi",[t._v("A")]),s("mo",[t._v("+")]),s("mn",[t._v("4")]),s("mi",[t._v("D")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("RTO = A + 4D")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.76666em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.00773em"}},[t._v("R")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mord mathit"},[t._v("A")]),s("span",{staticClass:"mbin"},[t._v("+")]),s("span",{staticClass:"mord mathrm"},[t._v("4")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")])])])]),t._v(", 其中 A 为平均 RTT，D为被平滑的均值偏差。")])]),t._v(" "),s("p",[t._v("对于丢包有两种判定方式，一种是超时重传（在一定时间内如果没有得到发送数据报的 ACK 报文，那么就重新发送数据），一种是收到三个重复的 ACK.")])])]),t._v(" "),s("h3",{attrs:{id:"tcp-ip-各层长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip-各层长度","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP/IP 各层长度")]),t._v(" "),s("p",[t._v("其关系可以表示为 { 数据帧 {IP 包 {TCP/UDP 包 {DATA} } } }")]),t._v(" "),s("p",[t._v("在应用程序中我们用到的 data 的长度最大是多少，直接取决于底层的限制。")]),t._v(" "),s("p",[t._v("链路层：数据帧长度为 MTU 为 1500")]),t._v(" "),s("p",[t._v("网络层：IP 包的首部需要占 20 字节，所以这里的 MTU 为 1500 - 20 = 1480")]),t._v(" "),s("p",[t._v("传输层：UDP 包首部占 8 字节，MTU = 1472; TCP 首部占 20 字节, MTU = 1460。")]),t._v(" "),s("p",[t._v("特别注意，当我们 UDP 包中的数据多于 1472 的时候，发送方的 IP 层需要分片进行传输，而在接收方 IP 层则需要对数据进行重组，由于 UDP 是不可靠的协议，如果分片导致重组失败，UDP 包就会被丢弃。")]),t._v(" "),s("p",[t._v("在网络编程中，Internet 上标准的 MTU 为 578，所以 UDP 编程时最好在 576 - 20 - 8 = 548 字节以内。")]),t._v(" "),s("h3",{attrs:{id:"tcp-三次握手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 三次握手")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("客户端发送一个 SYN, 并指明客户端的 ISN.")])]),t._v(" "),s("li",[s("p",[t._v("服务端发送自己的 SYN 段作为应答，指明自己的 ISN. 为了确认客户端的 SYN, 将客户端的 ISN + 1 作为 ACK 数值。")])]),t._v(" "),s("li",[s("p",[t._v("为了确认服务端的 SYN, 客户端将自己的 ISN + 1 作为返回的 ACK.")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("        TCP A                                                TCP B\n\n1.  CLOSED                                               LISTEN\n\n2.  SYN-SENT    --\x3e <SEQ=100><CTL=SYN>               --\x3e SYN-RECEIVED\n\n3.  ESTABLISHED "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("<SEQ")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("<ACK=101><CTL=SYN,ACK>  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("--")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("SYN-RECEIVED")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("4.")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ESTABLISHED")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" <SEQ=101><ACK=301><CTL=ACK>       --\x3e ESTABLISHED\n\n5.  ESTABLISHED --\x3e <SEQ=101><ACK=301><CTL=ACK>"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("DATA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" --\x3e ESTABLISHED\n")])])]),s("p",[t._v("SEQ 表示 sequence number, 握手时发送的为自己的 ISN 内容。")]),t._v(" "),s("p",[t._v("为了避免 ISN 攻击，ISN 的计算方式为："),s("code",[t._v("ISN = M + F(localhost, localport, remotehost, remoteport)")]),t._v(", 其中 M 表示一个计数器，ISN 可以看做是一个32 比特的计数器，每隔 4ms 加 1，F 是一个 Hash 算法。")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("知识拓展：TCP 序列号回绕")]),t._v(" "),s("p",[t._v("由于 ISN 是随机产生的，所以序列号就很容易超过 2^31-1, 因此出现了 TCP 序列号回绕的问题，如何判断 TCP 回绕呢？")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("before")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__u32 seq1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __u32 seq2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__s32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("seq1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("seq2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" after(seq2, seq1) before(seq1, seq2)")]),t._v("\n")])])]),s("p",[s("code",[t._v("s32")]),t._v(" 表示有符号整型的意思，如果发生了回绕，那么会导致 "),s("code",[t._v("seq1")]),t._v(" 大于 "),s("code",[t._v("seq2")]),t._v(", 例如 "),s("code",[t._v("seq1 = 255")]),t._v(", "),s("code",[t._v("seq2 = 1")]),t._v(" 的时候，两者相减，我们将结果转化成有符号数：")]),t._v(" "),s("p",[t._v("seq1 - seq2 = 1111 1111 - 0000 0001 = 1111 1110, 由于结果被强制类型转化为负数，所以其差值小于 0, 判断发生了回绕，交换 seq1 和 seq2.")])]),t._v(" "),s("h3",{attrs:{id:"tcp-状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-状态","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 状态")]),t._v(" "),s("p",[t._v("连接：")]),t._v(" "),s("ol",[s("li",[t._v("SYN_SENT")]),t._v(" "),s("li",[t._v("SYN_RCVD(LISTEN 转变)")]),t._v(" "),s("li",[t._v("ESTABLISHED")])]),t._v(" "),s("p",[t._v("关闭：")]),t._v(" "),s("ol",[s("li",[t._v("FIN_WAIT_1")]),t._v(" "),s("li",[t._v("CLOSE_WAIT")]),t._v(" "),s("li",[t._v("FIN_WAIT_2：处于半关闭状态。")]),t._v(" "),s("li",[t._v("TIME_WAIT：2MSL 后完全断开。")]),t._v(" "),s("li",[t._v("LAST_ACK")]),t._v(" "),s("li",[t._v("CLOSED")])]),t._v(" "),s("p",[t._v("2MSL 等待时间：")]),t._v(" "),s("p",[t._v("收到 FIN 请求后等待。每个具体 TCP 必须实现选择一个报文段的最大生存时间 MSL，它是任何报文被丢弃在网络内的最长时间（RFC793 指出 MSL 为 2 分钟，实现中可以改变这个值）")]),t._v(" "),s("p",[t._v("假设由于客户端发送确认 FIN 的 ACK 不一定能被服务器收到，在丢失的情况下，需要等待大于 RTO（动态变化，取决于 RTT）的时间，一般 2MSL 的时长是远大于 RTO 的。")]),t._v(" "),s("p",[t._v("处于这个等待时间时，主动发起断开的一端的 IP 和端口不能再被使用，任何迟到的数据包都被丢弃。对于服务器主动发起断开而言，处于 TIME_WAIT 等待状态的端口号在 2MSL 时间内不能被使用，一般需要等待 1-4 分钟。")]),t._v(" "),s("p",[t._v("异常终止一个连接：")]),t._v(" "),s("p",[t._v("不同于有序释放，异常终止连接丢弃任何待发数据立即发送 RST 位置 1 的复位报文，执行异常关闭。")]),t._v(" "),s("p",[t._v("RST 的作用：")]),t._v(" "),s("ol",[s("li",[t._v("连接未启动的服务或者端口，直接回复 RST 报文")]),t._v(" "),s("li",[t._v("异常终止")]),t._v(" "),s("li",[t._v("检测半打开连接，存在半打开连接的话，使用 RST 关闭")])]),t._v(" "),s("h3",{attrs:{id:"连接队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#连接队列","aria-hidden":"true"}},[t._v("#")]),t._v(" 连接队列")]),t._v(" "),s("p",[t._v("在外部请求到达时，被服务程序最终感知到前，连接可能处于 SYN_RCVD 状态或是 ESTABLISHED 状态，但还未被应用程序接受。")]),t._v(" "),s("p",[t._v("对应的，服务器会维护两种队列：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("SYN_RCVD 状态")]),t._v(" "),s("p",[t._v("半连接队列 "),s("code",[t._v("syns queue")]),t._v(", 位于 "),s("code",[t._v("/proc/sys/net/ipv4/tcp_max_syn_backing")]),t._v(" 下，值为 256；")]),t._v(" "),s("p",[t._v("在三次握手协议中，服务器维护该半连接队列，该队列为客户端的每个 SYN 开设一个条目(request_sock), 表明服务器已收到 SYN 包，并向客户端发送 ACK 确认，等待客户端的确认 ACK。当服务器收到客户的确认包时，删除该条目，服务器进入 ESTABLISHED 状态。")])]),t._v(" "),s("li",[s("p",[t._v("ESTABLISHED 状态")]),t._v(" "),s("p",[t._v("全连接队列 "),s("code",[t._v("accept queue")]),t._v(", 位于 "),s("code",[t._v("/proc/sys/net/core/somaxconn")]),t._v(", 值为 128, 或者和 "),s("code",[t._v("backlog")]),t._v(" 取最小值。")]),t._v(" "),s("p",[t._v("当第三次握手服务端接收到 ACK 包以后，会进入 accept queue, 当该队列满了以后，即使客户端继续向服务端发送 ACK 的包，也不会被响应，并且 "),s("code",[t._v("ListenOverflows + 1")]),t._v(", 服务端通过 "),s("code",[t._v("tcp_abort_on_overflow")]),t._v(" 来决定如何返回，0 表示直接丢弃，1 表示发送 RST 通知客户端，客户端会回应 "),s("code",[t._v("read timeout")]),t._v(" 或者 "),s("code",[t._v("connection reset by peer")]),t._v(".")])])]),t._v(" "),s("p",[t._v("如果这两个队列满了，就会出现各种丢包的情况。")]),t._v(" "),s("h3",{attrs:{id:"指数退避"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指数退避","aria-hidden":"true"}},[t._v("#")]),t._v(" 指数退避")]),t._v(" "),s("p",[t._v("使用指数退避法来决定是否放弃连接：目前，Linux 下默认会进行 5 次重发 SYN-ACK 包，重试的间隔时间从 1s 开始，下次的重试间隔时间是前一次的双倍，5 次的重试时间间隔为 1s, 2s, 4s, 8s, 16s, 总共 31s, 称为指数退避，第 5 次发出后还要等 32s 才知道第 5 次也超时了，所以，总共需要 1s + 2s + 4s+ 8s+ 16s + 32s = 63s, TCP才会把断开这个连接。")]),t._v(" "),s("p",[t._v("其他情况算法：如果 服务器 CPU 时钟时间为 500 ms, 重传时间利用指数退避的计算方式为 1.5 的整数倍，"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("1")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mn",[t._v("5")]),s("mo",[t._v("∗")]),s("msup",[s("mn",[t._v("2")]),s("mn",[t._v("0")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1.5 * 2^0")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mord mathrm"},[t._v(".")]),s("span",{staticClass:"mord mathrm"},[t._v("5")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("0")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(", "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("mn",[t._v("1")]),s("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),s("mn",[t._v("5")]),s("mo",[t._v("∗")]),s("msup",[s("mn",[t._v("2")]),s("mn",[t._v("1")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1.5 * 2^1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")]),s("span",{staticClass:"mord mathrm"},[t._v(".")]),s("span",{staticClass:"mord mathrm"},[t._v("5")]),s("span",{staticClass:"mbin"},[t._v("∗")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathrm"},[t._v("2")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[s("span",{staticClass:"mord mathrm"},[t._v("1")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("...以此类推，最终的结果是1、3、6、12、24、48、64、64...")]),t._v(" "),s("p",[t._v("如果连接两端同时发送 SYN 信号，这种情况叫做 Simultaneous Open，解决方法是两端都发送一个 ACK 并且两端同步 SYN-ACK。")]),t._v(" "),s("h3",{attrs:{id:"超时和重传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#超时和重传","aria-hidden":"true"}},[t._v("#")]),t._v(" 超时和重传")]),t._v(" "),s("p",[t._v("拥塞控制(Congestion control)作用于整体网络，它是防止过多的包被发送到网络中，避免出现网络负载过大，网络拥塞的情况。")]),t._v(" "),s("blockquote",[s("p",[t._v("There are two general methods for this: in the explicit version, the protocol has a field for specifically informing the sender about the congestion status. In the implicit version, the sender tries to guess when the network is congested and should throttle its output.")])]),t._v(" "),s("p",[t._v("拥塞控制有其状态机和四种算法。"),s("a",{attrs:{href:"https://mp.weixin.qq.com/s/v8dBxRSOwJaQWxuKVyLv2A",target:"_blank",rel:"noopener noreferrer"}},[t._v("可以参考这篇文章"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Congestion Control State Machine. 拥塞控制状态机的状态有五种，分别是Open, Disorder, CWR, Recovery 和 Loss 状态。")]),t._v(" "),s("h4",{attrs:{id:"拥塞控制算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制算法","aria-hidden":"true"}},[t._v("#")]),t._v(" 拥塞控制算法")]),t._v(" "),s("p",[t._v("四种算法分别为：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("慢启动 - slow start")]),t._v(" "),s("p",[t._v("TCP 刚建立连接时，一点点提速，试探一下网络的承受能力。")]),t._v(" "),s("p",[t._v("慢启动允许一方放松连续的未经确认的分组的增加方式采用"),s("strong",[t._v("指数增加")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("拥塞避免")]),t._v(" "),s("p",[t._v("一般情况下，有两组分组丢失的指示："),s("strong",[t._v("超时")]),t._v("和"),s("strong",[t._v("接收到重复的确认")]),t._v("。")]),t._v(" "),s("p",[t._v("该方法是在慢启动算法后发现拥塞窗口大小大于等于慢启动阈值后（执行慢启动算法一般是 cwnd < ssthresh），就进入拥塞避免算法。")]),t._v(" "),s("p",[t._v("拥塞避免允许一方放松连续的未经确认的分组的增加方式采用"),s("strong",[t._v("线性增加")]),t._v("。")]),t._v(" "),s("p",[t._v("拥塞避免算法和慢启动算法需要对每个连接维持两个变量：一个"),s("strong",[t._v("拥塞窗口 cwnd")]),t._v(" 和一个"),s("strong",[t._v("慢启动门限 ssthresh")]),t._v("。算法的工作过程如下：")]),t._v(" "),s("ol",[s("li",[t._v("对于一个给定的连接，初始化 cwnd 为 1 个报文段(这是慢启动过程，初始化为 1，指数增长直到到达 ssthresh 后进行拥塞避免)，每收到一个确认就加 1，这会使得窗口按指数方式增长。")]),t._v(" "),s("li",[t._v("拥塞避免算法要求每收到一个确认时将 cwnd 增加 1/cwnd，这是一种线性增长。在一个往返时间最多为 cwnd 增加1个报文段。")]),t._v(" "),s("li",[t._v("如果 cwnd 值小于或者等于 ssthresh，则进行慢启动，否则进行拥塞避免。")])]),t._v(" "),s("p",[t._v("举例说明：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/cwnd.jpg",alt:"cwnd and ssthresh"}})]),t._v(" "),s("p",[t._v("假设在 cwnd 为32个报文段时发生拥塞（超时引起），于是设 ssthresh 为16个报文段，而 cwnd 为1个报文段，cwnd 在收到发送报文的 ACK 时指数增长，直到 cwnd 等于 ssthresh 才停止，从这时起 cwnd 线性增加，并在每个往返时间内最多增加1个报文段。")])]),t._v(" "),s("li",[s("p",[t._v("拥塞发生时算法")]),t._v(" "),s("p",[t._v("上面提到过超时重传和接收到 3 个以上的重复 ACK, 对于后者情况（前者情况在上面举例说明了），TCP 认为数据发生丢失，需要重传。这个机制"),s("strong",[t._v("不需要等待 Timestamps 或者定时器超时")]),t._v("，所以叫做快速重传，由于在快速重传后使用拥塞避免算法（而未转到慢启动），所以也叫作快速恢复算法。")]),t._v(" "),s("p",[t._v("没有执行慢启动的原因：\n收到重复的ACK不仅仅告诉我们一个分组丢失了，还告诉我们一个数据包离开网络顺利到达接受者，而接收方只是没有收到需要序号的报文才会重复发送ACK。这种情况下，在收发两端之间仍然有流动的数据，而我们不想执行慢启动来突然减少数据流。")])]),t._v(" "),s("li",[s("p",[t._v("快速恢复")]),t._v(" "),s("p",[t._v("当收到第三个重复的 ACK 的时候，将 ssthresh 的值设置为当前拥塞窗口 cwnd 值的一半。重传丢失的报文段，设置 cwnd 的 ssthresh（微观上等于 cwnd / 2 + 3）, 3 表示之前收到的 3 个重复的 ACK，进入拥塞避免算法。")])])]),t._v(" "),s("h3",{attrs:{id:"tcp-data-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-data-flow","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP Data Flow")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("TCB")]),t._v(": In short, the TCP has to keep track of the sequences of data it has sent and received acknowledgments for. To achieve this, a data structure called the "),s("em",[t._v("Transmission Control Block")]),t._v("(TCB) is initialized for every opened connection. "),s("a",{attrs:{href:"http://www.saminiir.com/lets-code-tcp-ip-stack-4-tcp-data-flow-socket-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("see there"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("TCB 是每个连接的 own records.")]),t._v(" "),s("p",[t._v("TCB 一个用于保存 TCP 连接的 ISN, SEQ, ACK 等的数据结构，一般至少为 280 字节，有些操作系统甚至需要 1300 字节。")]),t._v(" "),s("p",[t._v("由于，SYN 超时需要 63 秒，那么就给攻击者一个攻击服务器的机会，攻击者在短时间内发送大量的 SYN 包给 Server (俗称SYN flood攻击)，如果恶意地向某个端口发送大量的 SYN 包，则会造成 "),s("strong",[t._v("SYS Flood 攻击")]),t._v("，其原理是利用合理的服务器请求来占用过多的服务资源，使得服务器打开大量的半开连接，分配 TCB，消耗大量服务器资源，同时也使得正常的连接请求无法被响应。")]),t._v(" "),s("p",[t._v("解决方法：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("无效连接的监视释放")]),t._v(" "),s("p",[t._v("监视系统的半开连接和不活动连接，到一定阈值的时候释放。")])]),t._v(" "),s("li",[s("p",[t._v("延缓 TCB 分配")]),t._v(" "),s("p",[t._v("由于 SYS Flood 很难建立起连接，所以采用在连接建立后再分配 TCB 的方法：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Syn Cache")]),t._v(" "),s("p",[t._v("系统在收到一个 SYN 报文时，在一个专用的 hash 表中保存这种半连接信息，直到收到正确的回应 ACK 报文再分配 TCB。")])]),t._v(" "),s("li",[s("p",[t._v("Syn Cookie")]),t._v(" "),s("p",[t._v("使用一种特殊的算法计算 Sequence Number, 在收到对方的 ACK 报文以后，重新计算看其是否与回应报文中的 Sequence Number - 1 相同，从而决定是否分配 TCB 资源。")])]),t._v(" "),s("li",[s("p",[t._v("Syn Proxy 防火墙")]),t._v(" "),s("p",[t._v("使用防火墙技术，略过。")])])])])]),t._v(" "),s("h3",{attrs:{id:"流量控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流量控制","aria-hidden":"true"}},[t._v("#")]),t._v(" 流量控制")]),t._v(" "),s("p",[t._v("TCP(Transmission Control Protocol) 使用滑动窗口来进行流量控制")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("            Left window edge             Right window edge\n                       |                             |\n                       |                             |\n          ---------------------------------------------------------\n          ...|    3    |    4    |    5    |    6    |    7    |...\n          ---------------------------------------------------------\n                  ^     ^                            ^    ^\n                  |      \\                          /     |\n                  |       \\                        /      |\n             Sent and           Window size: 3         Cannot be\n             ACKed                                     sent yet\n")])])]),s("h3",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model","aria-hidden":"true"}},[t._v("#")]),t._v(" Model")]),t._v(" "),s("h3",{attrs:{id:"tcp-udp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP&UDP")]),t._v(" "),s("p",[s("strong",[t._v("Tips:")]),t._v(" HOST means Domain or IP address.")]),t._v(" "),s("p",[t._v("TCP(20bits) and UDP(8bits) could use a same port in a host without conflict.、")]),t._v(" "),s("h3",{attrs:{id:"ftp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ftp","aria-hidden":"true"}},[t._v("#")]),t._v(" FTP")]),t._v(" "),s("p",[t._v("FTP is often secured with "),s("strong",[t._v("SSL/TLS(FTPS)")]),t._v(" or "),s("strong",[t._v("SFTP")]),t._v(".")]),t._v(" "),s("p",[t._v("FTP通信中使用两条TCP连接：")]),t._v(" "),s("ul",[s("li",[t._v("控制")]),t._v(" "),s("li",[t._v("数据传输")])]),t._v(" "),s("p",[t._v("FTP uses multiple TCP connections:")]),t._v(" "),s("ul",[s("li",[t._v("control channel(port 21)")]),t._v(" "),s("li",[t._v("data channel(port 20)")])]),t._v(" "),s("p",[t._v("FTP 端口号：21 端口用于连接，20 端口用于传输数据。具体过程为：进行 FTP 文件传输时，客户端首先连接到服务器的 21 端口，进行用户的认证，传输文件时，服务器打开 20 端口来进行传输。")]),t._v(" "),s("h2",{attrs:{id:"arp-网络层"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arp-网络层","aria-hidden":"true"}},[t._v("#")]),t._v(" ARP - 网络层")]),t._v(" "),s("p",[t._v("ARP 即地址解析协议，工作在网络层(与 IP 同一层), 其作用是将 IP 解析为 MAC 地址（在IPv6 中使用邻居发现协议进行解析），相应的，RARP 是将 MAC 地址解析为 IP 地址。")]),t._v(" "),s("p",[t._v("在以太网中，一个主机和另一个主机进行直接通信，必须要知道目标主机的 MAC 地址，所谓地址解析就是主机在发送帧（链路层）前，将目标 IP 地址转化成目标 MAC 地址的过程。ARP 协议的基本功能就是通过目标设备的 IP 地址，查询目标设备的 MAC 地址，保证通信的顺利进行。")]),t._v(" "),s("p",[t._v("IP 地址为 32 位，MAC 地址为 48 位。")]),t._v(" "),s("h3",{attrs:{id:"工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),s("p",[t._v("在每台安装有 TCP/IP 的电脑中都有一个 ARP 缓存表，表中的 IP 地址与 MAC 地址是一一对应的，发送数据时，主机会在自己的 ARP 缓存表中查询是否有目标 IP 地址：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("有，则得出目标的 MAC 地址")])]),t._v(" "),s("li",[s("p",[t._v("没有，则在网络上发送一个广播")])])]),t._v(" "),s("h2",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),s("h3",{attrs:{id:"http-和-https"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-和-https","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 和 HTTPS")]),t._v(" "),s("p",[t._v("关系："),s("strong",[t._v("HTTP + 加密 + 认证 + 完整性保护 = HTTPS")])]),t._v(" "),s("h3",{attrs:{id:"dns-解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析","aria-hidden":"true"}},[t._v("#")]),t._v(" DNS 解析")]),t._v(" "),s("p",[t._v("DNS 属于应用层协议，其使用端口号 53，同时使用 TCP 和 UDP 协议，具体为：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("DNS 在区域传输的时候使用 TCP 协议")]),t._v(" "),s("p",[t._v("辅助域名服务器会定时(一般为 3 小时)向主域名服务器进行查询以便于了解数据是否有变动，如果有变动，会执行一次区域传送，进行数据同步，这时候使用 TCP 连接，因为数据同步传送的数据量比一个请求应答的数据量要多得多，同时 TCP 的可靠性也保证了数据的准确性。")])]),t._v(" "),s("li",[s("p",[t._v("其他时候使用 UDP 协议")]),t._v(" "),s("p",[t._v("客户端向 DNS 服务器查询域名，一般返回的内容都不超过 512 字节，所以使用 UDP 查询即可。不用经过三次握手，这样 DNS 服务器的负载更低，响应更快。")])])]),t._v(" "),s("h3",{attrs:{id:"get-and-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-and-post","aria-hidden":"true"}},[t._v("#")]),t._v(" GET and POST")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("GET 和 POST 方法的长度限制")]),t._v(" "),s("p",[t._v("GET 方法提交的数据大小长度并没有限制，HTTP协议规范没有对 URL 长度进行限制(GET 参数带在 URL 后面)。这个限制是特定的浏览器及服务器对它的限制。")]),t._v(" "),s("p",[t._v("POST是没有大小限制的。HTTP 协议规范也没有进行大小限制，起限制作用的是服务器的处理程序的处理能力。如 Tomcat 下可以配置 POST 大小或者取消 POST 的限制，某些数据(如 file) 只能由 POST 携带。")])]),t._v(" "),s("li",[s("p",[t._v("GET 请求能够被 cache, POST 不进行缓存")])]),t._v(" "),s("li",[s("p",[t._v("获取一个网站的 GET 请求头部："),s("code",[t._v("curl -I www.weigao.cc")]),t._v(": 只请求头部；如果要显示全部信息，使用 "),s("code",[t._v("-i")]),t._v("; 显示全部请求过程，使用 "),s("code",[t._v("-v")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("一个 POST 请求体的举例")]),t._v(" "),s("p",[t._v("POST 请求可以分为 请求行、请求头、请求体。")])])]),t._v(" "),s("h3",{attrs:{id:"request-and-response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-and-response","aria-hidden":"true"}},[t._v("#")]),t._v(" Request and Response")]),t._v(" "),s("p",[t._v("Request:")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("GET /hello.txt HTTP/1.1\nHost: www.mysite.com\nAccept-Language: en\n")])])]),s("p",[t._v("Response:")]),t._v(" "),s("h3",{attrs:{id:"tcp-socket"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-socket","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP socket")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/chenweigao/python_web/tree/master/socket",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code in Github"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Note that if the client is the type of "),s("code",[t._v("str")]),t._v(", the "),s("code",[t._v("encode()")]),t._v(" it:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current time is "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=v.exports}}]);