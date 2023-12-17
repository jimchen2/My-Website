// ProjectContent.js
const projectData = [
  {
    image: "graficon (1).jpg",
    title: "My Website",
    time: "June 2023 - Aug 2023 (Actively Maintained)",
    description:
      "React-based front end, Express.js and MongoDB backend, featuring a blog, user comments section.<br />" +
      "User-friendly, easy navigation, with backend efficiently handling data storage for posts, comments, and visitor info.",
    sourceCode: "https://github.com/jimchen2/My-Website",
    docs: "http://jimchen.me/Thu%20Aug%2017%202023%2013:11:49",
    // demo: "https://www.mywebsite.com"
  },
  {
    image: "proj2.jpg",
    title: "Versatile Collection of Utility Scripts",
    time: "June 2023",
    description:
      "<b>2048:</b> Game for practing CSS, Javascript skills.<br />" +
      "<b>Customized-Wallpaper:</b> (Gnome) Automatically download and setting wallpapers from customized regions.<br />" +
      "<b>AddSubtitles:</b> Download invidious with combined customized subtitles.<br />" +
      "<b>Uploadbilibili:</b> (Selenium) automatically upload videos.<br />" +
      "<b>123moviespider:</b> Web scraping and extraction.<br />" +
      "<b>tohtml:</b> Customized Lua script for converting to html.",
    sourceCode: "https://github.com/jimchen2/util-scripts",
    // "docs": "http://jimchen.me/Thu%20Aug%2017%202023%2013:11:49",
    demo: "https://www.jimchen.me/2048.html",
  },
  {
    image:
      "https://lh3.googleusercontent.com/fife/AGXqzDk0wQ8Jr6xZCGgQBQNqNZP3OGtFYALF6Psl1APK12rX1PruveRCVoA3MsbfqsA_lQJ619bVE-Hu0LlbfkGFRYmwk_H_K8u8fIkU8iTQEpC1MtwN4ZMumdD8tdVRuCJqIYuhDxqBNj2oL93_tWj1l9QIlU2l0Cd_i8QE3yVAmq-6hgOQVcq5YHoxp8in5xbfKuq4Zj-_8_HW0owAHiwQfMNlPcfXjm35N18DlvnZ2AmiwZ0EnI2fsBy5dBLk2yVeGtZlB81x5J2QVEav8EU6eWs2KNA7Ak6kpvaTPm9iHA9z6zNP27M0Pwi2XMXV3-PDUISJbPAJKPULgUSP5rykIKj0b_tqfMNmCdwxGxYBDOWvBFOUpjLVPtlXY0cq8eu_wmbGU_nMJpDW3cGSc97Q60BkMgzoT9v_7b9Z6FvZINmKHa-EXkXqw4jTl9aLokGqz38DWqXNn_9JIidEm6edqkJMKb-qp6hKe3i1bbFGTvJGSYFS5cENtxwACkVzlkuLlP7aRtQ4NLljGQFyYsebY8DQDuisuEg0kkqELJFYeoSE8PzaRIBXwMYWy-9X3WKZAP3DO1WvAEnEyp5qK8_aGPShzGrioAteevubCBi-Bvd4Bk_6E8nX56LoCWotQNGA-kaayZ4Y8vbFC49EgtLl03kzcmMf8akcSY3f4HwS4Ma_HT6q7pmxSlodQmLZdQhSf0OalufZhgUzPBS9jqDMlXYrBa0YDPw0WvT6ROeJIPy9ebQULawc5cQ-HxIpWtJA8ANARem_XxhVcKuEv_lOTICAGTBBF1suOTkDzP2Rqk0Pcnr275UL_cqWNuoUK7diQIrxpCPrNgFfwHMLWjM10Djvz_HIlZK8WxGeViovtpHxoYe7dCqzvQ075HhMxakQhnDKTaMRSCYmjqwNoIb7dFpQ9Aj3I2G4ecGzVZkIU9hK=w1960-h2700",
    title: "Secure File Sharing System",
    time: "July 2023",
    description: `File-system with Golang focusing on security, privacy, and efficiency.(like Dropbox) <br/>
    Using cryptographic methods to secure user data by encrypting it with keys derived from username and password. 
    Functions include user storing, retrieving, appending files, sharing and revoking invitations`,
    // sourceCode: "https://github.com/jimchen2/My-Website",
    docs: "http://jimchen.me/Sat%20Jul%2022%202023%2022:04:05",
    // demo: "https://www.mywebsite.com"
  },
  {
    image:
      "https://lh3.googleusercontent.com/fife/AGXqzDk1o8mFB65vzT6MGt_Mfsoo_wDNHr7MGNxEEGZoDX-PIJnvYtQjPmwWw8EppA2K-GXUsAJ8wKdNRejaC_Z-b6Tax00X-2XBI1AiecC9emdc2oOteDWCp5bhfyhI3htA5WfNRIh7BCV_HydY6E8iBqzbdFX5xGuuPyYUIt0NReP4bBrNGorh7Ulk7p73yFeFdVCnaVQizdAnZDt9HsB6MEnitQl6LhD7K63FGzLpIlAV84DemUYuGSgxXKzl_kD5EdUl-ocKqctscQYENcc-tZ4iDGjB6hUg4x2HehA7zfdO_d13owF96uiWcA-mIoOM2s4aTSDMJrcY1ovRhGHpgMq2wLE_oWh0RlVnQDB2iofej_d1O_a-saLdd9LAxOd_xkdjpf0fJhBleG2mwt38lA0hKIZ1IcPQXPdjjVtaqEQZHN8pzFAXioDiMDNm2HPIszXsaTGXNF8_tfqnbxM95UVn-syj5OT7rizsG-mRcIM1h5liDBlB13JQNu85xBBGyVng4haDRNlrEthf08dOiVSb2RAgEHVm-RTApEiHK6p7YpXV9otHnTor2NvL31HBGDVDogWqeaNXz19F0uFV8i4OXmoqeozznYb0YdXeAEREN4OBnZ4W4crEjdM-SG1TUG3b-d0SYB68xrBuc3iOyT6AAnJ-rgYeQMx1-mzGUoBEfvOQpSt-e0xFlnh59htA8P_m8xFM-3m-PcBGshWo0mwy9ola56nwcUn77EKIze2SbFsRtHYdBYyqSKAraDIKmjbGHgzaN3Cwd-lX65GxBuHSwLO1bRB9_XqM4deVpHJrdkR2W2hE_AtZovwhsjGoA07TIY6bTZFpY3o46bU5kHcNx2EJoDBYflH8-EI0b4kex7CUDLYIdhSofU5sASiC3Jyj2V10bIDeIypDq_CY2dg6e6ErsoFT5198H-sVK0KE2QJPhuAUdxDbXhf1TA8XD33WgX75-j8Ao7ubpx7n8-6lDc4cRIbNKzRg-ocK3XL5O7-DXcOdGh9IktBxBB7kOD2d4W5XEnf4sZAa-ZMHBGVi53zTUe_CI1iAwA1ynhY6EyvhBcu_Xfcv8BfiLK8EOaiGyWuKmVbC1nsEVI_GlXAU5wEph1BORODve2dKyMBdUbOu2GeYr_MPga2M4dBfIiN7xNRNGnXiHtNWgFiPst5Y7oHiKY-ZEJhJBGSu6kFlAH3j0HPmRbOJWhg27T-8lQNEtaPZ-pGR1e4oxPAdcHRYD29oJ_IOv81o0I1M7QApXjPcIFh3pVG447UfI7IJlyM43b2i1iIGJu0VTesW1Mf8pk-4NE99RqzWd5c2a5mE0y0QwZm1-FxJZF7vj5sEn3avDXXmBoeJfsOGhOVp5Tnq8kvUfJg07Vo5IdGCXaBsaSHDp_uxmSBGyuLmIhwrixkPUwpvzxe_-_Z4Mr9vq2wg26NWHFIN8E_39I2UNDjROrfUKXQ5uXUSk4ld5qgEWD2ig7MYXgHPERQYNufR6FeZc1svJncOX4gLelkfnZMSgPtFfb4UBw1As8FS_SBh=w1940-h2672",
    title: "Pacman",
    time: "June 2023 - Aug 2023",
    description: `CS188 Projects, including Search, Multiagent Search, RL, Bayes Nets and HMMs, and Machine Learning`,
    // sourceCode: "https://github.com/jimchen2/My-Website",
    // docs: "http://localhost/Sat%20Jul%2022%202023%2022:04:05",
    // demo: "https://www.mywebsite.com"
  },
  {
    image:
      "https://lh3.googleusercontent.com/fife/AGXqzDm8W2zmggagCX7FXGlZSRJeORlPII6n8REpN9lXTxB8hFD_A50e2rYibSiCkYGqbIzrF6OiN4qb_9dxfJwbet9mCVPXckP2PN5R5IfQYvzw1xTtCmr7QOg8_utkJZEYsyXQoBEkiTIfvE2c7niUi-PNCinGrJrgMkgN1enc9T4hRim3Y0UOFmoimh-vBqVWLr20izA1rabzsKGa7FcAAKEvgcqvYgNBEpqFNoqA9TmdH9D0x57AqiJN23RTVLXfr-k1p9QFtSTDQfe3X0R1tu16bhiThN-hjp72FZXqTOH4KD3gaAyz5sE36UWagfnVFNKJWyIKSaNtssMJ8tnatooM4R2SQMgv3_6GDBiorHMsbf6lKJ6-2RKq5WAFtFfpE5NR6Nm7x2ARCsCYqk8DHUkTL5zZCYNVcdhkK2xbR8K2GfAJXuoZs1blvhVeZI3DGKqaZvUVHKp3gGO_h70dHboMEC8wTabw-xMa0rKpmn5TkXssv3AQyBIiacF9_8-JqRvO7cbOVh_QyeGLv9scsY62iwH-OkLfn0r_8O3nCZr5HfZ5FV_WrT2ZRbV2KedDSeWhjzLfZegL-2EOabs2Y4E2DQL4o88Evmma26LPOpUsiPGMT0ELr-wBTf-4cV1ASN6Ut8U9S_V-dYOMqIrJGKUWMuUjCLUEH1pXs-z2gQCcikQbVzEO-bNsJjuU_XK8aE2V8BugLUF7j5i30GiAxw46n7KEnkMJvofsQgg1aHl7naAlPo9eSChkrHKi8E_XoCSnJXBYv2N-OMLxoYsORYqmWQ-Q7iMf1T_fhMvTLLP-layJDHFd_bVHsmVgtAp1RpEziCQhoW_Qf7_u5EfBkrcAfz6m3ZG9a_1QD4KzIpruwhaiinA3VZLmk8-t37yGVqBNOzb_BF4aH8pFkZ5Qq7dMo9N0dnjan49AIfaTJcO5-k03Rr1Ayf4wJyC_WRyu6gyeYLYr3VnfluUgRTny-U7e04SbyccmVF95KUZGQLeibcfCUkSuPUfoYpCYbmc0drcr7xDlNjgg9FFmCZjmYI06zhX6sdEBqhcv6qZuUySlSl4te-2zkeSkOjTMYpbRkd9btlXWbetHYeZ1JAoBww2AauD9tTMlteCuOkELa-vbSwsYTQkwGsIXL23mZ3_QL9MVtXnXlgNGYMEqHo5rko3--MFpClC-YRuWqwioxzCgKSVdNDtXHeBPnnvywCZp9hs_DtDHBbk_F02DNTh0oR4f_YI87SCHq5DmOoYlko30PgbAHlFrPXw3FaKnSe_5Holos3KHIELhvI0mtERd3BV1_mtSsmYfcHSz2PhbiX8jCVrqK0LXGgS2sROcSYtaCPfNsmpIsYNAS6uIpaw5elfLIr3US4CLD5TmR3sJxmAsAA5JAcRfJUnI1YCvCdeKnbAtoEXlW1QUZ9OPoem3mY8LDHy1kWXU_dovwHSXhxzHU9NbTRaHLSdBYLIG1iGKZHDNIt9AJ9MwsXegEoQRQB3qJfdslIr-Uf4wbrgw7yy6URs9jAuiD7_VKrWP85GK=w1940-h2672",
    title: "ML-based Trash Bot",
    time: "Oct 2023 - Dec 2023",
    description: `The EE149 project is developing an ML-Based Trash Collector Bot,
     an autonomous robot that uses a YOLO v5 neural network and a Raspberry Pi for
      real-time trash detection and collection. This bot combines hardware and 
      software to address challenges like precise line following, accurate trash 
      identification, and efficient operation of a robot arm for trash pickup.    
   `,
    sourceCode: "https://github.com/jimchen2/EECS-149-Final-Project",
    docs: "https://drive.google.com/file/d/16Ebg0ZhTaQ_F5RhLwpUBUiV8byGKC-IG/view",
    // demo: "https://www.mywebsite.com"
  },
];

export default projectData;
