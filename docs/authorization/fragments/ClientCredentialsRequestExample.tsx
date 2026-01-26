import CodeBlock from '@theme/CodeBlock';

type Props = {
  readonly resource?: string;
  readonly organizationId?: string;
  readonly scope: string;
};

const ClientCredentialsRequestExample = ({ resource, organizationId, scope }: Props) => (
  <CodeBlock language="http">
    {`POST /oidc/token HTTP/1.1
Host: your.logto.endpoint
Content-Type: application/x-www-form-urlencoded
Authorization: Basic base64(client_id:client_secret)

grant_type=client_credentials
`}
    {resource && `&resource=${resource}\n`}
    {organizationId && `&organization_id=${organizationId}\n`}
    {`&scope=${scope}
`}
  </CodeBlock>
);

export default ClientCredentialsRequestExample;
