import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import html2canvas from 'html2canvas';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private temporaryData = {
    name: 'jaejong',
    age: '29',
    city: 'suwon',
  };

  private mounted() {
    // html2canvas(document.body).then((canvas) => {
    //   console.log('canvas', canvas);
    //   document.body.appendChild(canvas);
    // });
    html2canvas(document.getElementById('home2') as HTMLElement).then(
      (canvas) => {
        console.log('canvas', canvas);
        console.log('dataUrl', canvas.toDataURL());
        document.body.appendChild(canvas);
      },
    );
  }
}
