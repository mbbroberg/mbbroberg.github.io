FROM jekyll/jekyll as build-env

WORKDIR /src
COPY Gemfile* ./
RUN chmod 777 /src
RUN bundle install

COPY . .
RUN mkdir /src/_site
RUN chmod 777 /src/_site
RUN bundle exec jekyll build --baseurl ''

FROM nginx:alpine
COPY --from=build-env /src/_site /usr/share/nginx/html
