<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-item :link="links.footer.link" classLink="footer__item">
              <img
                :src="require(`@/assets/logo/${links.footer.icon}`)"
                :alt="`@/assets/logo/${links.footer.icon}`"
              />
            </nav-item>
            <nav-item
              v-for="link in links.other"
              :key="link.id"
              :link="link.link"
              :text="link.text"
              classLink="footer__item"
            >
            </nav-item>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
  components: { NavItem },
  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>