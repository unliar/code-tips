# 计算机基础

## HTTP、HTTPS、HTTP2

* HTTP:是互联网上应用最为广泛的一种网络协议,设计的初衷是为了传输文本/超文本传输协议。HTTP请求基于TCP,会由客户端建立一个指向服务器端口的TCP连接。TCP建立连接需要三次握手,断开链接则需要四次挥手,建立关闭TCP链接过程中会存在频繁的握手挥手,因此,为了节约建立TCP连接的时间,于是就有人开始打算复用TCP链接...多路复用...http2...。

* HTTPS:是超文本安全传输协议。简单来说就是HTTP协议与加密协议的结合,主要是为了数据传输过程中的安全性问题。在实际生产环境中,遇到很多次运营商劫持篡改数据的问题,最终倒逼公司上HTTPS。

* HTTP2:在应用层与传输层之间增加一个二进制分帧层，以此达到“在不改动 HTTP 的语义，HTTP 方法、状态码、URI 及首部字段的情况下，突破 HTTP1.1 的性能限制，改进传输性能，实现低延迟和高吞吐量。在二进制分帧层上，HTTP2.0 会将所有传输的信息分割为更小的消息和帧，并对它们采用二进制格式的编码，其中 HTTP1.x 的首部信息会被封装到 Headers 帧，而我们的 request body 则封装到 Data 帧里面。HTTP2.0 在客户端和服务器端使用“首部表”来跟踪和存储之前发送的键-值对，对于相同的数据，不再通过每次请求和响应发送。对于 HTTP1.1，浏览器通常最多有链接的限制，即使开启多个链接，也需要付出不小的代价。而多路复用允许同时通过单一的 HTTP2.0 连接发起多重的“请求-响应”消息。 HTTP2.0 通信都在一个连接上完成，这个连接可以承载任意数量的双向数据流。

* **总结**
>1. https能有效的减少被运营商小广告劫持的烦恼。虽然说https的加密解密据说会影响性能,但是你的量级没到那个程度,服务器闲着也是闲着。
>2. http2强制https,所有的 HTTP2.0 的请求都在一个 TCP 链接上,所以同域名下的请求数限制就失效了,不用用多个域名加载资源,前端合并资源并且减少请求似乎都没有意义。 

## 对称加密、非对称加密

* 对称加密: 加密和解密使用相同的密钥，优点是加密速度快，缺点是如果密钥泄露的话就无法做到保密了。常见的对称加密算法有DES、AES等。

* 非对称加密: 又叫公开密钥加密。需要有2个密钥，公钥和私钥，公钥向所有人公开，私钥不公开。用公钥加密的数据只有私钥才能解密；反之，用私钥加密的数据只有公钥才能解密。因为这种特性，非对称加密算法可以用来校验数字签名，下面会具体讲解。

## 进程和线程的区别
>CPU为了执行多任务,会让各个任务交替执行,但是由于执行速度很快,一般情况下,会让人感觉到所有任务在同时执行。一个程序至少一个进程,一个进程至少有一个线程。线程和进程都CPU工作时间段的描述,线程的粒度要小于线程。

* 进程：对于操作系统来说一个任务就是一个进程,是CPU资源分配的最小单位。进程的切换时间=CPU加载上下文+执行+保存上下文。

* 线程: 线程是CPU调度的最小单位。线程共享进程的上下文环境,资源消耗较小。**由于共享上下文可能存在线程间的竞争,emmmm...lock。**

## 进程间通信的几种方式 [来源地址](https://blog.csdn.net/wh_sjc/article/details/70283843)
> 管道/消息队列/共享存储/信号量/Socket/Stream

> 1.管道：速度慢，容量有限，只有父子进程能通讯    

> 2.FIFO：任何进程间都能通讯，但速度慢    

> 3.消息队列：容量受到系统限制，且要注意第一次读的时候，要考虑上一次没有读完数据的问题    

>4.信号量：不能传递复杂消息，只能用来同步    

> 5.共享内存区：能够很容易控制容量，速度快，但要保持同步，比如一个进程在写的时候，另一个进程要注意读写的问题，相当于线程中的线程安全，当然，共享内存区同样可以用作线程间通讯，不过没这个必要，线程间本来就已经共享了同一进程内的一块内存

* 管道：管道，通常指无名管道，是 UNIX 系统IPC最古老的形式。

  1. 它是半双工的（即数据只能在一个方向上流动），具有固定的读端和写端。

  2. 它只能用于具有亲缘关系的进程之间的通信（也是父子进程或者兄弟进程之间）。

  3. 它可以看成是一种特殊的文件，对于它的读写也可以使用普通的read、write 等函数。但是它不是普通的文件，并不属于其他任何文件系统，并且只存在于内存中。

* 命名管道：它是一种文件类型。

  1. FIFO可以在无关的进程之间交换数据，与无名管道不同。

  2. FIFO有路径名与之相关联，它以一种特殊设备文件形式存在于文件系统中。

* 消息队列：消息队列，是消息的链接表，存放在内核中。一个消息队列由一个标识符（即队列ID）来标识。
  1. 消息队列是面向记录的，其中的消息具有特定的格式以及特定的优先级。
  
  2. 消息队列独立于发送与接收进程。进程终止时，消息队列及其内容并不会被删除。

  3. 消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取,也可以按消息的类型读取。

* 信号量：信号量（semaphore）与已经介绍过的 IPC 结构不同，它是一个计数器。信号量用于实现进程间的互斥与同步，而不是用于存储进程间通信数据。
  1. 信号量用于进程间同步，若要在进程间传递数据需要结合共享内存。

  2. 信号量基于操作系统的 PV 操作，程序对信号量的操作都是原子操作。

  3. 每次对信号量的 PV 操作不仅限于对信号量值加 1 或减 1，而且可以加减任意正整数。

  4. 支持信号量组。

* 共享内存：指两个或多个进程共享一个给定的存储区。

  1. 共享内存是最快的一种 IPC，因为进程是直接对内存进行存取。

  2. 因为多个进程可以同时操作，所以需要进行同步。

  3. 信号量+共享内存通常结合在一起使用，信号量用来同步对共享内存的访问。

 

## JSON WEB TOKEN
>一个JWT实际上就是一个字符串，它由三部分组成，头部、载荷与签名。通过头部指定的规则用载荷生成一个指定的签名,并且用.连接起来。可防止载荷的篡改,实现鉴权。

* 头部：头部用于描述关于该JWT的最基本的信息，例如其类型以及签名所用的算法等。这也可以被表示成一个JSON对象。对它也要进行Base64编码，之后的字符串就成了JWT的Header（头部）。

* 签名：签名的过程，实际上是对头部以及载荷内容进行签名。一般而言，加密算法对于不同的输入产生的输出总是不一样的。对于两个不同的输入，产生同样的输出的概率极其地小（有可能比我成世界首富的概率还小）。所以，我们就把“不一样的输入产生不一样的输出”当做必然事件来看待吧。所以，如果有人对头部以及载荷的内容解码之后进行修改，再进行编码的话，那么新的头部和载荷的签名和之前的签名就将是不一样的。而且，如果不知道服务器加密的时候用的密钥的话，得出来的签名也一定会是不一样的。

* 载荷：指的是你需要传输的数据

* 过程：服务器使用指定的密钥下发token,以后的请求需带上这个token,服务器通过鉴定这个token来决定给不给相关请求通过。如果有人对头部以及载荷的内容解码之后进行修改，再进行编码的话，那么新的头部和载荷的签名和之前的签名就将是不一样的。而且，如果不知道服务器加密的时候用的密钥的话，得出来的签名也一定会是不一样的。

* 缺点：载荷会暴露,所以请不要传输敏感数据。纯粹的jwt无法主动使得token失效。

* 优点：状态可以不用再保存在数据库,服务器只负责token的签发与校验。