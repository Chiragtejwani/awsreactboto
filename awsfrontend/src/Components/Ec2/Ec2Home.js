import CustomCard from "../Card/Card";
const Ec2Home = () => {
    return ( 
        <>
            <CustomCard link = "/ec2/create" title = "Create Ec2 Instance" action="Create new EC2 Instance" message="mazon Elastic Compute Cloud (Amazon EC2) offers the broadest and deepest compute platform, with over 500 instances and choice of the latest processor, storage, networking, operating system, and purchase model to help you best match the needs of your workload. " />
            <CustomCard link = "/ec2/list" title = "List Ec2 Instances" action="List all Instances" message="All the active Ec2 Instances will be listed"/>
        </>
     );
}
 
export default Ec2Home;