<template>
    <div id="TalionNav">
        <header class="TalionNav">
            <div class="TN-primary">
                <a href="#" class="logo">
                    <h1>豆瓣</h1>
                </a>
                <nav>
                    <router-link to="../subject/index.vue" tag="span"></router-link>
                    <a href="#" class="open">打开豆瓣App</a>
                </nav>

            </div>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#TalionNav .TalionNav{
     width: 100%;
     position: relative;
     z-index: 9999;
     background: #fff;
}

.TN-primary{    background: #fff; position: fixed;left: 0;top:0;width:100%;box-shadow: 0 1px 2px rgba(0, 0,0,.08);display: flex;justify-content:flex-start;align-items: center;padding: 0 18px;height: 47px;box-sizing: border-box;}
.TN-primary .logo{margin-right: 15px;}
.TN-primary .logo h1{margin: 0;padding: 0;font-size: 0;color: #00b600;background: url()no-repeat;background-size: cover;height: 22px;width:48px;}
.TN-primary>nav{display: flex;align-items: center;justify-content: space-between;flex: 1;}
.TN-primary>nav>span{font-size: 0;background: url()no-repeat;background-size: cover;width: 24px;height: 18px;margin-top: 4px;position: relative;}
.TN-primary .open{background-color: #42bd56;color: #fff;font-size: 13px;line-height: 1;padding: 8px 13px;border-radius: 6px;font-weight: 500;}
</style>

