---
sidebar_position: 10
---

# 💾 File storage provider

By default, Logto Console uses a text input for static file URLs such as avatars. To enable a more intuitive file upload experience with drag and drop, you need to configure a storage provider.

Logto supports multiple storage providers, including AWS S3, Azure Storage. This recipe will show you how to configure a storage provider for Logto.

The configuration is stored in DB's `systems` table, but it is recommended to use the CLI to configure the storage provider. For more information, try the "help" command:

```sh
pnpm logto db system --help
```

## Azure Storage

Azure Storage is a powerful and scalable cloud storage solution that allows you to store and manage your data in the cloud. The following recipe will show you how to configure Azure Storage as a storage provider for Logto.

### Prerequisites

- [Azure Storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview)

### Config using CLI

Example usage:

```
pnpm logto db system set storageProvider '{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}'
```

#### `connectionString`

To access Azure Storage, you need to use a connection string, which is a string of characters that contains the necessary information for establishing a connection to your storage account.

To get the connection string, follow the official [Azure Storage connection string documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string).

#### `container`

The container is a storage resource that stores blobs. You can use the container to organize your blobs and to control access to your data.

To create a container, follow the official [Azure Storage container documentation](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers).

#### `publicUrl`

Optional.

The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the Azure Storage's default "Primary endpoint" as the public URL. Logto will get this value from "connectionString" with the help of Azure SDK. To learn more about your storage account's primary endpoint, follow the official [Azure Storage primary endpoint documentation](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview#primary-endpoints).

## S3 Storage

S3 Storage is a cloud storage service that offers object storage through a web service interface. The following recipe will show you how to configure S3 Storage as a storage provider for Logto.

### Prerequisites

- [S3 Storage account](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html) or other S3 compatible storage service, such as [MinIO](https://min.io/)

### Config using CLI

Example usage:

```
pnpm logto db system set storageProvider '{"provider":"S3Storage","accessKeyId":"my-access-key-id","accessSecretKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}'
```

#### `accessKeyId`

The access key ID is an identifier for your AWS account. To find your access Key ID for your AWS account, follow the official [AWS access key ID documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey).

#### `accessSecretKey`

The secret access key is used in conjunction with the access key ID to sign programmatic requests. To find your access key secret for your AWS account, follow the official [AWS access key secret documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey).

#### `bucket`

The bucket is a container for objects stored in Amazon S3. To create a bucket, follow the official [AWS S3 bucket documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html).

#### `endpoint`

Endpoint is the URL that is used to access the AWS S3 service. To find your AWS S3 endpoint, follow the official [AWS S3 endpoint documentation](https://docs.aws.amazon.com/general/latest/gr/s3.html).

#### `publicUrl`

Optional.

The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the S3 Storage's default URL.
