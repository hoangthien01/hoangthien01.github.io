<template>
  <div>
      <h1>Blogs</h1>
      <div>
        <div v-for="(blog,index) in blogs" :key="index" class="item"> 
            <div class="image">
                <img :src="blog.thumbnail" alt="" class="">
            </div>
            <div class="info">
                <h3>{{blog.title}}</h3>
                <p class="sub-title">{{blog.categoryId}}</p>
                <p class="memo">{{blog.content}}</p>
                <div class="socials">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fas fa-comment"></i>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Blogs',
    data() {
        return {
            blogs: [
                {
                    "id": "2",
                    "categoryId": "UI developer",
                    "createdAt": "2021-04-23T09:07:41.855Z",
                    "title": "cross-platform",
                    "thumbnail": "http://lorempixel.com/640/480/animals",
                    "description": "Legacy",
                    "content": "I'll compress the cross-platform CSS monitor, that should alarm the JSON program!"
                },
                {
                    "id": "3",
                    "categoryId": " UX developer ",
                    "createdAt": "2021-04-23T14:57:39.459Z",
                    "title": "Bedfordshire",
                    "thumbnail": "http://lorempixel.com/640/480/transport",
                    "description": "Investor",
                    "content": "If we transmit the bandwidth, we can get to the SCSI microchip through the back-end JBOD hard drive!"
                },
                {
                    "id": "4",
                    "categoryId": " UI developer ",
                    "createdAt": "2021-04-23T13:31:36.828Z",
                    "title": "programming application quantify",
                    "thumbnail": "http://lorempixel.com/640/480/city",
                    "description": "Dynamic",
                    "content": "Use the redundant TCP capacitor, then you can parse the redundant monitor!"
                },
                {
                    "id": "6",
                    "categoryId": "Vue developer",
                    "createdAt": "2021-04-23T21:46:59.584Z",
                    "title": "Ergonomic Cotton Bacon",
                    "thumbnail": "http://lorempixel.com/640/480/cats",
                    "description": "Senior",
                    "content": "You can't back up the driver without backing up the open-source EXE transmitter!"
                },
                {
                    "id": "7",
                    "categoryId": " UI developer ",
                    "createdAt": "2021-04-23T18:21:17.130Z",
                    "title": "Baby",
                    "thumbnail": "http://lorempixel.com/640/480/technics",
                    "description": "Lead",
                    "content": "Try to transmit the IB sensor, maybe it will input the cross-platform transmitter!"
                },
            ]

        }
    }
}
</script>

<style scoped>
h1 {
    margin: 20px 0;
    font-size: 35px;
}
p {
    margin: 0;
}
h3 {
    margin: 0;
    font-size: 30px;
    line-height: 40px;
}
.item {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    cursor: pointer;
}

.item:hover h3 {
    transform: scaleY(1.1);
    text-decoration: underline;
}

.image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 5px;
}
img {
  width: 100%;
  height: 100%;
}
.info {
    text-align: left;
    padding-left: 20px;
    flex: 1;

}
.sub-title {
    line-height: 25px;
    font-size: 24px;
    margin-bottom: 15px;
}
.memo {
    font-size: 20px;
}
.socials {
    margin-top: 10px;
}
.socials i {
    margin-right: 10px;
    font-size: 20px;
}
@media (max-width: 900.98px) {
  h3 {
      font-size: 25px;
      line-height: 30px;
  }
  .sub-title {
      font-size: 20px;
      margin-bottom: 5px;
  }
  .memo, .socials i{
      font-size: 17px;
  }
  .socials  {
      margin-top: 5px;
  }
}
@media (max-width: 651.98px) {
    .image{
        width: 250px;
        height: 250px;
        margin: 0 auto 10px auto;
    }
    .item {
        display: block;
        margin-bottom: 45px;
    }
    .info {
        text-align: center;
    }
    h3 {
        font-size: 28px;
        line-height: 40px;
    }
    .sub-title {
        font-size: 22px;
        margin-bottom: 5px;
    }
    .memo, .socials i{
        font-size: 18px;
    }
    .socials  {
        margin-top: 5px;
    }
}
</style>