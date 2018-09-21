# lukep.me

This is my personal website. Check it out!



# Deployment

Build a new client bundle

    docker-compose run --user=$UID --rm --no-deps app-core yarn run build


Build/ push a new docker image

    docker build -f config/Dockerfile -t lukeparzych/lukep.me:latest
    docker push lukeparzych/lukep.me:latest


Transfer secrets (TLS certs and stuff) from local comp to DigitalOcean droplet. 

    scp -r secrets luke@lukep.me:~/lukep.me/secrets


Deploy new docker images/ source code/ config files to DigitalOcean droplet.

    ssh luke@lukep.me
        [ on remote host]
        cd lukep.me
        git pull
        docker stop $(docker ps -a -q)
        docker rm $(docker ps -a -q)
        docker-compose -f docker-compose.prod.yml up -d
