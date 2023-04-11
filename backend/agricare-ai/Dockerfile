FROM python:3.9.16

WORKDIR /usr/src/app

COPY ./requirements.txt ./
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install build-essential libssl-dev libffi-dev python3-dev -y
RUN pip install -r requirements.txt
COPY . .
EXPOSE ${PORT}
ENTRYPOINT [ "python" ]

CMD [ "app.py" ]
