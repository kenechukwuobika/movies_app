import { Box, Button, Center, Divider, Heading, Image, Text, VStack, Flex } from 'native-base'

const ShowDetails = (props) => {
    const { data, isMovie } = props;
    const { original_title, original_name, popularity, overview, poster_path, showMovie } = data;

    const title = isMovie ? original_title : original_name;

    return(
        <VStack space={10} alignItems='center' mb={2} paddingX={4}>
            <Heading size='md'>{title}</Heading>

            <Image alt={title} source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}  width={200} height={220} />

            <Text>{overview ? overview : 'No Overview'}</Text>

            <Text>
                <Text>Popularity: </Text>
                <Text>{popularity}</Text>
            </Text>

        </VStack>
    )
}

export default ShowDetails;