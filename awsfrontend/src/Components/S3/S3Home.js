import CustomCard from "../Card/Card";
const S3Home = () => {
    return ( 
        <>
            <CustomCard link = "/s3/create" title = "Create S3 Bucket" action="Create Bucket" message="Every object in S3 is stored in a bucket. To upload files and folders to S3, you’ll need to create a bucket where the objects will be stored." />
            <CustomCard link = "/s3/list" title = "List S3 Buckets" action="List all Bucket" message="All the active S3 buckets will be listed"/>
        </>
     );
}
 
export default S3Home;