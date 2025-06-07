import CodeBlock from '@theme/CodeBlock';

type Props = {
  readonly grantType: 'refresh_token' | 'authorization_code';
  readonly resource?: string;
  readonly organizationId?: string;
};

const TokenRequestExample = ({ grantType, resource, organizationId }: Props) => {
  const params = [
    `grant_type=${grantType}`,
    grantType === 'authorization_code' && 'code=authorization-code-received',
    grantType === 'authorization_code' && 'redirect_uri=https://your-app.com/callback',
    grantType === 'refresh_token' && 'refresh_token=your-refresh-token',
    resource && `resource=${resource}`,
    organizationId && `organization_id=${organizationId}`,
  ].filter(Boolean);

  return (
    <CodeBlock language="http">
      {`POST /oidc/token HTTP/1.1
Host: your.logto.endpoint
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

${params.join('\n&')}`}
    </CodeBlock>
  );
};

export default TokenRequestExample;
