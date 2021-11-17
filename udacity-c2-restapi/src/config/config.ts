export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": "postgres",
    "host": process.env.POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.POSTGRES_AWS_REGION,
    "aws_profile":process.env.POSTGRES_AWS_PROFILE,
    "aws_media_bucket": process.env.POSTGRES_AWS_MEDIA_BUCKET,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}

// "dev": {
//   "username": "udagrambaahdev",
//   "password": "udagrambaahdev",
//   "database": "postgres",
//   "host": "udagrambaahdev.caqrddidfbw2.us-east-1.rds.amazonaws.com",
//   "dialect": "postgres",
//   "aws_region": "us-east-1",
//   "aws_profile": "default",
//   "aws_media_bucket": "udagram-baah-dev"
// },