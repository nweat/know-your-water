import os
import multiprocessing

port = int(os.environ.get("PORT", 5000))
host = '0.0.0.0'
worker_class = 'gevent'  # necessary
timeout = 90  # not necessary
workers = multiprocessing.cpu_count() * 2 + 1
