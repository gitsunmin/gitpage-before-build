import { Vue, Component } from 'vue-property-decorator';
// import { mapGetters } from 'vuex';
const careerList = [
  {
    companyName: '(주) 코렌스',
    partName: '프론트엔드 파트',
    position: '매니저',
    term: {
      start: '2019-07-08',
      end: '재직중',
    },
    projectList: [
      {
        name: '비공개',
        description: '업무 솔루션(개발중)',
        part: '프론트엔드',
        term: {
          start: '2019-08',
          end: '진행중',
        },
        techList: [
          'Vue(Quasar Framework)',
          'aws(code 시리즈, S3, EC2,, Amplify, cognito, cloudfront, appSync)',
          'GraphQL',
        ],
      },
      {
        name: '비공개',
        description: `사내 공지사항 & 일정관리 프로그램을 Electron을 이용하여 데스크탑 앱을 개발하여
          사내 인원들의 업무 효울을 상승시켰다.`,
        part: '전체 1인 개발',
        term: {
          start: '2019-08',
          end: '2019-10',
        },
        techList: [
          'Vue(Quasar Framework)',
          'electron',
          'sass / scss',
          'axios',
          'google api(로그인, 스프레트시트, 캘린더)'],
      },
      {
        name: '비공개',
        description: `사내에서 개발한 프로그램을 배포하는 마켓(웹 사이트)을
         Vue를 기반으로 개발하여 업무 솔루션 배포의 기반을 만들었다.`,
        part: '프론트엔드 전체',
        term: {
          start: '2019-07',
          end: '2019-08',
        },
        techList: [
          'Vue(Quasar Framework)',
          'sass / scss',
          'axios',
          'Google API(oauth를 이용한 로그인 구현)',
        ],
      },
    ],
  },
];

@Component({
  computed: {},
})
export default class Works extends Vue {
  private careerList: any[] = careerList;
}
