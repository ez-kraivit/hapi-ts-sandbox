# hapi_plugins_type_script

## Void
### TypeScript :void ใช้ในกรณีที่ไม่ตได้ต้องการคืนค่าใด ๆ สามารถกำหนดเป็น Void ได้

## TypeScript
### ต้องการให้ผู้ร่วมพัฒนา Hapi and Lib นำไปต่อยอด ในงานโปรเจคของท่าน

## Build
### จำเป็นจะต้องทำการ Build ก่อนที่จะทำการ Docker Build 

## Docker Build
```sh
    docker build -t typescriptapp .
```

## Docker Run
```sh
    docker run --name app_typescript -it -p 5070:5070 typescriptapp
```