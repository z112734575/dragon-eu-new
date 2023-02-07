const  fs = require('fs');
const path = require('path');
const readDir = fs.readdirSync("./sections");
const shouldDelete = readDir.filter((file) => file.match(/pf\-[\w]*(.liquid)$/));
const keys = shouldDelete.map((file) => file.replace(/pf\-([\w]*)(.liquid)$/, '$1'));

const deleteFiles = function (dir) {
    fs.readdir(dir, function (err, files) {
        files.forEach(function (filename) {
            var src = path.join(dir, filename)
            fs.stat(src, function (err, st) {
                if (err) {
                    throw err
                }
                // 判断是否为文件
                if (st.isFile()) {
                    // 这里可以使用正则，也可以使用其他方法，比如字符串处理等，/\.d\.ts$/
                    keys.forEach((key) => {
                        if(filename.includes(key)) {
                            // console.log(filename, 'fff')
                            fs.unlink(src, err => {
                                if (err) throw err

                                console.log('成功删除：' + src)
                            })
                        }
                    })

                } else {
                    // 递归文件夹
                    deleteFiles(src)
                }
            })
        })
    })
}

deleteFiles('./')
