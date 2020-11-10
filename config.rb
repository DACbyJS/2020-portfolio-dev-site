# use slim
require 'slim'

# Directory Indexes for Middleman
activate :directory_indexes

# allows use of these files With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Webpack Pipeline
activate :external_pipeline,
   name: :webpack,
   command: build? ? 'npm run build' : 'npm run start',
   source: '.tmp/dist',
   latency: 1

config[:js_dir] = 'assets/javascripts'
config[:css_dir] = 'assets/stylesheets'