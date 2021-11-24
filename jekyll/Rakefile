require 'html/proofer'
require 'time'

# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
  HTML::Proofer.new("_site", {:href_ignore=> ['http://localhost:4000'], :verbose => true}).run

end

# rake new
desc 'create a new draft post'
task :new do
    title = ENV['TITLE']
    slug = "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"

    file = File.join(
        File.dirname(__FILE__),
        '_posts',
        slug + '.md'
    )

    File.open(file, "w") do |f|
        f << <<-EOS.gsub(/^     /, '')
        ---
        layout: post
        title: #{title}
        published: false
        categories:
        ---

        EOS
    end

    system ("#{ENV['EDITOR']} #{file}")
end

desc 'List all draft posts'
task :drafts do
  puts `find ./_posts -type f -exec grep -H 'published: false' {} \\;`
end
