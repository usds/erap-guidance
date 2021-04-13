require 'html-proofer'

task :test do
  sh "npm run build"
  options = { :assume_extension => true }
  HTMLProofer.check_directory("./_site", options).run
end
