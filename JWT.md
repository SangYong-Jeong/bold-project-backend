- jsonwebtoken 모듈을 통해 JWT 구현

- Token 발급
- 1. .env 파일에 jsonwebtkoen을 만들 때 사용할 비밀키를 환경변수로 등록 (비밀키는 문자열로 등록, 해당 비밀키가 있어야 token decode 가능)

- 2. User의 인스턴스 메서드로 토큰을 발급하는 generateToken 구현

- 3. jwt.sign 메서드로 token 발급 -> 첫 번째 인자는 토큰 안에 집어넣고 싶은 데이터, 두 번째 인자는 JWT암호, 세 번째 인자는 옵션으로 토큰의 만기일을 발급한 후 7일로 잡음

- 4. 발급한 token을 cookie에 담아 보낼것 httpOnly 속성을 활성화해 자바스크립트를 통해 쿠키를 조회 할 수 없게 만든다.

- 5. register router 와 login router에 token 발급하고 cookie에 담아 보내는 logic 완성 -> 쿠키의 옵션( 만료일 7일 및 httpOnly 활성화 )

---

- Token 검증
- 1. Middleware로 구현 -> router를 타기 전 Middleware에서 검증 (구현 완료)

---

- 추가 기능
- 1. Token의 만료일이 3.5일 미만 (즉 decoded 했을 때 나오는 exp property가 현재 시점으로 부터 3.5일 미만일 경우) 재발급 해주는 기능 - Date.now 이용해 구현 완료
