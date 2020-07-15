import os

port = int(os.environ.get("PORT", 5000))
host = '0.0.0.0'
worker_class = 'gevent'
