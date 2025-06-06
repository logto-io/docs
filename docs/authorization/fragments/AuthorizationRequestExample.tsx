import CodeBlock from '@theme/CodeBlock';

type Props = {
  readonly scope: string;
  readonly resource: string;
};

const AuthorizationRequestExample = ({ resource, scope }: Props) => (
  <CodeBlock language="http">
    {`GET /oidc/auth?response_type=code
&client_id=your-client-id
&redirect_uri=https://your-app.com/callback
&scope=openid profile offline_access ${scope}
&resource=${resource}
&code_challenge=abc123
&code_challenge_method=S256
&state=xyz
HTTP/1.1
Host: your.logto.endpoint
`}
  </CodeBlock>
);

export default AuthorizationRequestExample;
