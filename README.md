# React project supported by Docker
This project provide support for development to React JS, using Docker and Node.



## Prerequisites

* [Docker](https://www.docker.com/) - Virtualization.
* [Docker Compose](https://docs.docker.com/compose/) - Virtualization.
* [Node JS](https://nodejs.org/) - JS platform.
* [React JS](https://reactjs.org/) - JS Library.

## Installation

Clone repo
```sh
git clone https://github.com/henrycv/docker-react-i.git
```

## Usage example
```sh
cd docker-react-i
```

### For development 
1. Exec the following command on your terminal
```sh
docker-compose -f .docker/docker-compose.dev.yml up

```
2. Navigate to the following URL: 
[http://localhost:3000/](http://localhost:3000)


### For production 
1. Exec the following command on your terminal
```sh
docker-compose -f .docker/docker-compose.yml up
```
2. Navigate to the following URL: 
[http://localhost:8080/](http://localhost:8080)

## Release History
* 1.0.0
    * Work in progress

## Meta

Henry Carbajal – [henrycv](https://about.me/henrycv) 

Distributed under the MIT license.

## Contributing

1. Fork it https://github.com/henrycv/docker-react-i.git
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
