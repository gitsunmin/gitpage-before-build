import CyConfig from '@/lib-config/cytoscape.config';
import { Vue, Component } from 'vue-property-decorator';
// import { mapGetters } from 'vuex';

@Component({
  computed: {},
})
export default class Home extends Vue {
  private visibleDetail = false;

  private nodeId = '';

  private nodeName = '';

  get elements() {
    return CyConfig.elements;
  }

  get config() {
    const noElementsConfig = { ...CyConfig.config };
    return noElementsConfig;
  }

  updateNode(event: any) {
    console.log('right click node', event);
  }

  clickNode(e: Event, id: string, name: string, def: any) {
    console.log('e:', e);
    console.log('id:', id);
    console.log('name:', name);
    console.log('def:', def);
    console.log('this:', this);
    // if (id.includes('-')) {
    //   return;
    // }
    // this.$router.push(`/${id}`).catch((err: any) => console.error(err));
    // location.href = def.data.url;
  }
}
