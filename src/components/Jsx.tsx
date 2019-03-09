import { Vue, Component } from 'vue-property-decorator';

@Component({})
class Jsx extends Vue {
  render(h) {
    return (
      <div>
        <h1>如果能加载到这里，说明jsx已经起了作用了吗</h1>
      </div>
    );
  }
}
export default Jsx;
