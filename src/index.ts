const requestData = (params: any) => {}
const processParams = (params: any) => {}
const main = () => {
  const params = process.argv.slice(2)
  const processedParams = processParams(params)
  const result = requestData(processedParams)
  //result?.then((data) => console.log(data))
}

main()
