FROM python

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 5000

RUN chmod u+x ./entrypoint.sh
RUN chmod u+x ./wait-for-it.sh

ENTRYPOINT [ "./entrypoint.sh" ]
