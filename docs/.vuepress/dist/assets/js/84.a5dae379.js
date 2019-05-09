(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{509:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"csi-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csi-tool","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("Badge",{attrs:{text:"Research",type:"tip"}}),t._v(" CSI Tool")],1),t._v(" "),a("p",[t._v("These instructions are currently expected to work on Linux operating systems that are based on an upstream Linux kernel version between 3.2 (e.g. Ubuntu 12.04) and 4.2 (e.g. Ubuntu 14.04.4).\nThe IWL5300 provides 802.11n channel state information in a format that reports the channel matrices for 30 subcarrier groups, which is about one group for every 2 subcarriers at 20 MHz or one in 4 at 40 MHz. Each channel matrix entry is a complex number, with signed 8-bit resolution each for the real and imaginary parts. It specifies the gain and phase of the signal path between a single transmit-receive antenna pair.")]),t._v(" "),a("h2",{attrs:{id:"_1-1-预备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-预备工作","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 预备工作")]),t._v(" "),a("p",[a("strong",[t._v("硬件环境:")])]),t._v(" "),a("ol",[a("li",[t._v("intel 5300网卡（笔记本为mini-pcie接口，半高网卡、台式机为pcie接口，全高网卡）")]),t._v(" "),a("li",[t._v("无线路由器，一般为市面上常见的商用路由器即可，不设置wifi密码")])]),t._v(" "),a("p",[a("strong",[t._v("软件环境")])]),t._v(" "),a("p",[t._v("软件环境的配置较为困难，一有不慎可能会前功尽弃，不要气馁，多尝试几次也是自身提升的过程！\n软件要求：")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu >= 12.04LTS 操作系统镜像")]),t._v(" "),a("li",[t._v("csi-tool.tar文件\n(PS：这两个文件我已经上传到百度云，"),a("a",{attrs:{href:"http://pan.baidu.com/s/1dEZ9zSt",title:"csi-tool.tar",target:"_blank",rel:"noopener noreferrer"}},[t._v("csi-tool.tar"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"http://pan.baidu.com/s/1qY6wZN2",title:"Ubuntu-12.04-Desktop",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu-12.04-Desktop"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("h2",{attrs:{id:"_1-2-配置csi-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置csi-tool","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 配置CSI-Tool")]),t._v(" "),a("p",[a("strong",[t._v("注意：系统安装完成后，查看一下内核信息，是否为："),a("code",[t._v("Linux Version 3.2.0.84-generic-pae")]),t._v("，然后进行下一步")])]),t._v(" "),a("p",[t._v("可以参考官方文档："),a("a",{attrs:{href:"http://dhalperi.github.io/linux-80211n-csitool/installation.html",title:"Linux 802.11n CSI Tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux 802.11n CSI Tool"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("为了提高下载速度，首先需要"),a("strong",[t._v("更换软件源")]),t._v("。进入Ubuntu桌面系统，CTRL++ALT+T打开命令行，在命令行输入：")]),t._v(" "),a("p",[a("code",[t._v("sudo vi /etc/apt/source.list")])]),t._v(" "),a("p",[t._v("将里面所有的内容替换成搜狐的软件源，具体可以参考"),a("a",{attrs:{href:"https://www.weigao.cc/blog/2017/01/02/aptsource.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("apt-source"),a("OutboundLink")],1),t._v("上面说的。\n接下来：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" linux-headers-"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" git-core\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这一步是安装csitool所需要的一些依赖")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" iw\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" iface wlan0 inet manual "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/network/interfaces\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" restart network-manager\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#依次执行这三步")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" blacklist iwldvm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/modprobe.d/csitool.conf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" blacklist iwlwifi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/modprobe.d/csitool.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这两步是为了电脑在开机的时候不启动无线，不然有可能导致电脑无法正常开机")]),t._v("\n")])])]),a("p",[t._v("接下来找到我们之前下载好的csi-tool.tar文件，解压：")]),t._v(" "),a("p",[a("code",[t._v("tar -xvf csi-tool.tar")])]),t._v(" "),a("p",[t._v("得到zip文件，校验一下：")]),t._v(" "),a("p",[a("code",[t._v("MD5 (csi-tool.zip) = 9390f2d1a38d7e0cbd2d8115ea6dc05b")])]),t._v(" "),a("p",[t._v("然后继续解压得到的zip文件：")]),t._v(" "),a("p",[a("code",[t._v("unzip csi-tool.zip")])]),t._v(" "),a("p",[t._v("解压以后：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#首先用cd命令进入到linux-80211n-csitool文件目录下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" linux-80211n-csitool\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#对于特殊版本的内核：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#CSITOOL_KERNEL_TAG=csitool-$(uname -r | cut -d . -f 1-2)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#接下来编译")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -C /lib/modules/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build M"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/drivers/net/wireless/iwlwifi modules\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -C /lib/modules/"),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uname")]),t._v(" -r"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/build M"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("/drivers/net/wireless/iwlwifi INSTALL_MOD_DIR"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("updates \\\n    modules_install\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" depmod\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),a("p",[t._v("完成之后，会看到提示 "),a("em",[t._v("Can't read private key")]),t._v(" 的提示，可以进行下一步：\n在 supplyment 文件夹外面执行：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /lib/firmware/iwlwifi-5000-*.ucode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file")]),t._v(".orig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" linux-80211n-csitool-supplementary/firmware/iwlwifi-5000-2.ucode.sigcomm2010 /lib/firmware/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ln")]),t._v(" -s iwlwifi-5000-2.ucode.sigcomm2010 /lib/firmware/iwlwifi-5000-2.ucode\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" -C linux-80211n-csitool-supplementary/netlink\n")])])]),a("p",[t._v("执行完以后基本上就完成了，接下来是测试步骤：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" modprobe -r iwlwifi mac80211\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#如果提示 "FATAL: Module iwlwifi is in use." ，执行下一步')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" modprobe -r iwldvm iwlwifi mac80211\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#接下来reload")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" modprobe iwlwifi connector_log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("0x1\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" linux-80211n-csitool-supplementary/netlink/log_to_file csi.dat\n")])])])])},[],!1,null,null,null);s.default=n.exports}}]);