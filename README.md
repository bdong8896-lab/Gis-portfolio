# GIS 포트폴리오 사이트 배포 가이드

정적 사이트(HTML 한 장)라서 서버 없이 Cloudflare Pages 무료 플랜에 올릴 수 있습니다.
문의 폼은 Web3Forms를 통해 내 이메일로 전달됩니다.

## 폴더 구성

- `index.html` — 사이트 본문 (디자인, 내용, 문의 폼 모두 포함)
- `favicon.svg` — 브라우저 탭 아이콘
- `robots.txt` — 검색엔진 수집 허용

## 1. 내용 채우기

`index.html`에서 대괄호로 표시된 곳을 모두 바꿉니다. 편집기에서 `[` 로 검색하면 빠짐없이 찾을 수 있습니다.

- `[이메일 주소]` 2곳 (mailto 링크 포함), `[카카오톡 오픈채팅 링크]`, `[카카오톡 오픈채팅]`
- `[1]일` 회신 기간

## 2. 문의 폼 연결 (Web3Forms, 무료 월 250건)

1. https://web3forms.com 접속 → 문의를 받을 이메일 주소 입력 → Access Key 발급
2. 메일로 받은 키를 `index.html`의 `YOUR_ACCESS_KEY` 자리에 붙여넣기
3. 배포 후 직접 한 번 보내서 메일이 오는지 확인

## 3. Cloudflare Pages에 배포 (Git 없이 업로드)

1. https://dash.cloudflare.com 가입 / 로그인
2. 왼쪽 메뉴 **Workers & Pages** → **Create** → **Pages** 탭 → **Upload assets** (직접 업로드)
3. 프로젝트 이름 입력 (예: `myname-gis`) → 이 폴더(`gis-portfolio`)를 통째로 끌어다 놓기 → **Deploy**
4. 완료되면 `https://myname-gis.pages.dev` 주소로 바로 접속됩니다

화면 메뉴 이름은 Cloudflare 업데이트에 따라 조금씩 바뀔 수 있습니다.

### 수정 후 다시 올리기
프로젝트 화면 → **Create new deployment** → 수정한 폴더를 다시 업로드하면 됩니다.

### (선택) 내 도메인 연결
도메인을 구입했다면 프로젝트 → **Custom domains** → 도메인 입력. HTTPS 인증서는 자동으로 붙습니다.

## 4. 검색에 노출시키기

검색용 파일은 이미 들어 있습니다: `sitemap.xml`, `robots.txt`, `og.png`(링크 미리보기 이미지), `index.html` 안의 검색 설명·키워드·구조화 데이터.

1. 네이버 서치어드바이저(searchadvisor.naver.com) → 사이트 등록 `https://gis-portfolio.bdong8896.workers.dev` → HTML 태그 인증
2. 구글 서치 콘솔(search.google.com/search-console) → URL 접두어 `https://gis-portfolio.bdong8896.workers.dev/` → HTML 태그 인증
3. 받은 `<meta ...>` 태그 두 줄을 `index.html`의 "검색엔진 소유 확인 태그" 주석 자리에 붙여넣고 다시 배포 → 각 사이트에서 [확인] 클릭
4. 두 곳 모두 사이트맵 제출: `https://gis-portfolio.bdong8896.workers.dev/sitemap.xml`
5. 네이버: 요청 → 웹 페이지 수집 요청 / 구글: URL 검사 → 색인 생성 요청
6. 다음(Daum) 검색등록, Bing 웹마스터 도구(구글 서치 콘솔에서 가져오기)도 등록하면 좋습니다.
