import { Vue, Component } from 'vue-property-decorator';

@Component({
  computed: {},
})
export default class BlogPage extends Vue {
  isSelection(path: string) { return this.$route.path === path; }

  movePage(path: string) {
    if (this.isSelection(path)) return;
    this.$router.push(path);
  }
}
