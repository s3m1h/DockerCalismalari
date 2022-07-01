
## Docker hub üzerinden image indirmek:
```
docker pull imageName
```
## Docker hub üzerinden image sürümüne göre indirmek için örneğin:
```
docker pull ubuntu:18.04
```
## Docker image'ı calıstırmak.Image yoksa eğer docker hub üzerinden otomatik pull edilip çalıştırılır.
```
docker run ImageName
```
örnek:
* docker run nodejs
* docker run mysql
* docker run mongo

## Tüm çalışan containerların listesi:
```
docker ps
```
## Tüm çalışan ve çalışmayan containerların listesi:
```
docker ps -a
```

Aynı işlemi
```
docker container ls
```
```
docker container ls -a
```
ile de yapabiliriz

## Çalışan bir container ı durdurmak:
```
docker stop containerName || containerId
```

## Çalışmayan bir container ı silmek
```
docker rm containerName || containerId
```
## Tüm çalışan ve çalışmayan container ları silmek:
```
docker container rm $(docker container ls -aq)
```
## Image listelemek:
```
docker images
```
## Docker image istiyorsak onu kullanan bir container olmaması gerekiyor bu yuzden önce conteiner ı silip daha sonra image silebiliriz.:

```
docker rmi imageName || containerId
```
## Docker image i Detach modda run etmek.Bu işlemi yaptıgımızda bize bir id verir ve container arka planda çalışır
```
docker run -d imageName
```

## Docker image i Attach modda run etmek. Bu işlemde ise container çalıştığında ekranda bir çok log görebiliriz.
```
docker attach containerId
```
## Docker containerlar hakkında detaylı bilgi almak
```
docker inspect containerName|containerId
```
## Docker image ismini değiştirmek.
* yeni isimde buyuk harf kullanıldıgında uyarı verecektir.
* ayrıca kullanılan image in kopyası oluşacaktır.
```
docker image tag imageName|imageId yeni_isim
```
## Interactive terminal
```
docker run -it ubuntu
```
## Port mapping yapmak
```
docker run -p DIŞPORT:İÇPORT mongo
docker run -p 3001:3000 mongo
```

## Volume mapping yapmak


hedef_klasörü : mysql_kayıtları
```
docker run -v /opt/datadir:/var/lib/mysql mysql
```
```
docker run -v /opt/data:/etc/mongo mongo
```
## Docker image oluşturmak
* bunun için bir "dockerfile" isminde bir dosyaya ihtiyacımız var
* kullanılacak komutlar from, run, copy, env, workdir, cmd 
* from, bu komut ile  hangi imagein temel alınacağı belitilir
* run, aşağıdada göründüğü gibi komut satırında kullanıdğımız komutları çalıştırmak için run komutu kullanıyoruz
* copy, '.' bulunduğumuz dizindeki herşeyi hedef klasöre "/opt/node-app" kopyalamak icin kullanılıyor.
* env,  anladığım kadarıyla dışarıya bir veri aktarmak için kullanılıyor
* workdir, buda anladığım kadarıyla belirtilen dizine yerleşmek için kullanılıyor.
* cmd, image çalıştığında çalışacak olan komutu belirtiyoruz.
  
  ## Herbir satır layer olarak çalışmakta.
  ## * image oluşturulurken herhangi bir layerda hata alınırsa bir sonraki çalışmada bu layerdan öncekiler oto geçilir.
```
from ubuntu:18.04
run apt-get update
run apt-get install curl -y
run curl -sL https://deb.nodesource.com/setup_10.x | bash
run apt-get install nodejs -y
copy . /opt/node-app
env degisken=semih
#cmd ["node","/opt/node-app/index.js"]
workdir /opt/node-app
cmd ["node","index.js"];
```
* Docker image i oluşturmak için kullanılacak build komutu
```
docker build Dockerfile
```
* aynı dizinde ise
```
docker build .
```
veya
```
docker build . -t tagName
```