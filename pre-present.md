### Что такое докер? 
**Программное обеспечение** для автоматизации развёртывания и управления приложениями в среде виртуализации **на уровне операционной системы**; позволяет «упаковать» приложение **со всем его окружением и зависимостями** в контейнер, а также предоставляет среду по управлению контейнерами.

Виртуальные машины запускают приложения внутри гостевой операционной системы, которая работает на виртуальном железе основной операционной системы сервера. Докер контейнеры почти тоже, но благодаря правильному задействованию низкоуровневых механизмов основной операционной системы делают это с в разы меньшей нагрузкой.

Установка docker
https://timeweb.cloud/tutorials/docker/kak-ustanovit-docker-na-ubuntu-22-04

Гайд
docker run hello-world
docker pull busybox
 - https://ru.wikipedia.org/wiki/BusyBox
 - busybox из Докер хаба: https://hub.docker.com/search?q=easeln
 
docker images
docker run busybox
docker run busybox echo "hello wms"

docker ps
docker ps -a

docker run -it busybox sh
ls
uptime
whoami
rm -rf bin
exit

docker rm $(docker ps -a -q -f status=exited)
    -a - все 
    -q - ID
    -f - filter

docker rmi

Images (образы) - Схемы нашего приложения, которые являются основой контейнеров.

Containers (контейнеры) - Создаются на основе образа и запускают само приложение. 

Docker Daemon (демон Докера) - Фоновый сервис, запущенный на хост-машине, который отвечает за создание, запуск и уничтожение Докер-контейнеров.

Docker Client (клиент Докера) - Утилита командной строки, которая позволяет пользователю взаимодействовать с демоном.

Docker Hub - Регистр Докер-образов.


Base images (базовые образы) — это образы, которые не имеют родительского образа. Обычно это образы с операционной системой, такие как ubuntu, busybox или debian.
Child images (дочерние образы) — это образы, построенные на базовых образах и обладающие дополнительной функциональностью.


Официальные образы — это образы, которые официально поддерживаются командой Docker. В списке выше python, ubuntu, busybox и hello-world — базовые образы.

Пользовательские образы — образы, созданные простыми пользователями вроде меня и вас. Они построены на базовых образах. Обычно, они называются по формату user/image-name.

А теперь реальность

Заходим на вм
ssh ease-ln@51.250.11.157  



Sources

[1] - https://habr.com/ru/articles/310460/