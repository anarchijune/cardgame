# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Supabase 키 관리

- 키는 코드에 쓰지 않고 `.env.local` 에서만 읽습니다. (`.env`, `.env.local` 은 `.gitignore` 로 제외)
- 처음 받았다면 `.env.example` 을 `.env.local` 로 복사해 값을 채우세요.
- `VITE_` 로 시작하는 변수는 브라우저 번들에 포함됩니다. **publishable 키만** 넣으세요.
- `secret` / `service_role` 키와 `sbp_` 계정 토큰은 앱 코드나 `.env` 에 넣지 마세요.
- 데이터 보호는 키 비밀 유지가 아니라 RLS 와 테이블 권한으로 합니다.
- 배포 시에는 호스팅 서비스의 환경변수에 같은 두 값을 설정하세요.
