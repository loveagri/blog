<template>
    <div class="footer">
        <div
            class="icons"
            v-if="social && social.icons"
        >
            <a
                :href="item.link"
                :title="item.title"
                :class="['iconfont', item.iconClass]"
                v-for="(item, index) in social.icons"
                :key="index"
                target="_blank"
            ></a>
        </div>

        工信部备案信息：
        <a
            href="http://www.beian.miit.gov.cn/"
            target="_blank"
            title="beian"
        >冀ICP备19024518号-1</a>
        <template v-if="footer">
      <span
          v-html="footer.copyrightInfo"
      ></span>
        </template>
    </div>
</template>

<script>
export default {
    computed: {
        social() {
            return this.$themeConfig.social
        },
        footer() {
            return this.$themeConfig.footer
        }
    }
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
    padding 5rem 1.5rem 2.5rem
    text-align center
    color #666
    box-sizing border-box
    font-size 0.85rem
    transition all 0.2s ease

    .icons
        margin-bottom 12px

        .iconfont
            padding 0 10px
            font-size 1.3rem

    a
        color inherit

        &:hover
            color $accentColor

@media (min-width ($MQMobile + 1px))
    .sidebar-open .footer
        width auto
        padding-left ($sidebarWidth + 1.5rem)

@media (min-width 1520px)
    .have-rightmenu .footer
        padding-right ($rightMenuWidth + 1.5rem)

.no-sidebar .footer
    width auto
    padding-left 1.5rem
</style>
