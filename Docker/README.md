# Docker
>安装好docker之后，直接通过目录的文件构建镜像文件，启动容器




## 容器
1. 列出正在运行的容器
  ```
   docker ps
  ```
2. 删除所有容器
  ```
   docker rm $(docker ps -aq)
  ```
3. 启动一个容器
  ```
   docker run [options] 镜像名称
   
   //demo 启动一个名字叫baddbad的容器 自动重启 宿主机80端口映射3000 以lzt/node-bad 为镜像

   docker run --name baddbad --restart=always -p 80:3000 lzt/node-bad
  ```
## 镜像
1. 列出镜像
  ```
   docker images
  ```
2. 删除镜像
  ```
   docker rmi 镜像名

   //demo

   docker rmi lzt/node-bad:latest
  ```
3. 构建镜像
   ```
   docker build [options] 路径

   //demo 使用当前目录里的DockerFile 构建一个叫lzt/node-bad 的镜像

   docker build -t lzt/node-bad .

   ```
4. 其他操作

 ```
 //查看日志

 docker logs 容器名 -f

 // 进入bash容器交互界面

 docker exec -it 容器名 sh
 //
 ```