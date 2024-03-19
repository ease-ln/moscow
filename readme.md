# DevOps course at IU. Lab 1

## Overview

This is web application written using [WorldTimeAPI](http://worldtimeapi.org) showing Moscow time.

## Getting Started

### Local installation

Before running the application, please install its prerequisites:

* [node js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

To run from the lab1 branch, follow the instructions below:

1. Clone web application repository locally.

    ```bash
    git clone https://github.com/ease-ln/labs.git
    cd labs
    ```

2. Install packages.

    ```bash
    npm install
    ```

3. Run the application.

    ```bash
    node app.js
    ```


### Docker installation

Before running the application, please install its prerequisites:

* [Docker 20.10.17+](https://www.docker.com/products/docker-desktop/)

1. Build the image.

    ```bash
   docker build --tag moscow_time .
    ```

2. Run the container.

    ```bash
   docker run --publish 8000:8000 moscow_time
    ```
### Usage

You can run app and open [localhost](http://localhost:8000/) to view current Moscow time.

### Development&Contacts

Any problems or suggestions? You can contact me via [telegram](https://t.me/ease_l).
