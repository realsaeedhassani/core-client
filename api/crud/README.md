**api methods**

- JWT authentication
- دریافت
- ویرایش
- حذف
- ارسال فایل

# Example:

برای درخواستی که نیاز به احراز هویت داشته باشد، از متد به صورت زیر استفاده میکنیم.

```
async onReceiverOrder(){
await new Resource('your-url/...', this.$store.getters.token)
                .get()
                .then(result=>{
                      this.orders = result.data.orders;
                      })
                .catch((e)=>{
                      // Your code...
                      })
                .finally((e)=>{
                      // Your code...
                      })
```
