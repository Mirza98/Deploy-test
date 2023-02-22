for f in `find . -name "*.jpg"` 
do 
    convert  "$f[1920x>]" -quality 92 -resize 1920x $f 
done