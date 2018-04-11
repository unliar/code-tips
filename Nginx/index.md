# Nginx

## 强制https

```
server{                                                                                              
        listen 80;                                                                                   
        listen [::]:80;                                                                                       
        server_name hipoor.com www.hipoor.com;                                                       
        return 301 https://$server_name$request_uri;                                          
}                                                                                                    
server {                                                                                             
        listen 443 http2;                                                                        
        server_name hipoor.com;                                                                      
        ssl on;                                                                                      
        ssl_certificate /etc/nginx/sitecrt/hipoor/xx.crt;                           
        ssl_certificate_key /etc/nginx/sitecrt/hipoor/xxx.key;                              
        ssl_session_timeout 5m;                                                                      
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;                                                         
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;                          
        ssl_prefer_server_ciphers on;                                                                
        location / {                                                                                 
                proxy_set_header X-Forwarded-For $remote_addr;               
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; 
                proxy_set_header Host $host;                                 
                proxy_headers_hash_max_size 51200;                           
                proxy_headers_hash_bucket_size 6400;                         
                proxy_pass http://127.0.0.1:2666;                            
        }                                                                                            
} 

```
