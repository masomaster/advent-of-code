/* Data for Day 5 */
const DATASTREAM_BUFFER = "cdhccdbdggfjjgssjzjzggjnjpnpbbzbnzzflfjfnfrrpvrvbrvvrvggvlvnnbrnrcncsnndbndbnndbdndfdrdvrvvndvvbggnrrnbrnntffgttwzwnnmvmcvvhsstzzlnlwlttbzzpnpmnnjvjnntmnmfftwwrfwrwswmmfrrfrrgbrbffwvvshvhrhmhththbbmqbmqqlslhssrmmqdmmjtmtmjtmjtttnwnvwvqwqjjnbbbdbqbnbpnbnllglcglcgcdczdznnqhhfthtmtlldqlqrrmddrldlzdllvddjcddqfqbqsbqqnllwppqpqzzrbbdppzsppjdpdqpdqdfqfrrwbwrwwqcqcsqsvvpbvbbztzptzzpccdtdhdffvqvcvzzmwzwddjfdffplplqlvlmmmvggpmpvpddpbptplpvlplvpvvnrvnnbqqqjhhwfhwfhwhqhmmpphqpqvppfzpzjzddgzzwffjmjggwhwwnnmlmpmmhcmcpcrcddvzvpzzwnznfznffgdgvddvtvgvsvdsdbbjnjtntbnttgbbbvgvgrgrzrvzrzddlsddcndcnnfqnnmpmlppdlplzplzpzgzmzmddlvlnnbttbwwhbhdhfdfssjppmcpplpdddnpdnnljlwjljsjnjhnhvhvqqsffrbbdttjdjndjdwwsfspffnhfhhlvhvmmqjmmwzwszwwvdvpdvdbdtdsdtsshvvmtvmtmctclchccrllznzfffpjjvhhdmhhvphpghgsgmmhlhnlnmnlnslnlgngznnsqnqddllpwllmzmjmttptfpplglqlgglgqqptqqmvmtmjmddcchbblltslsvsmvmgghmmccnzcztczzmnmttrdrvvcvzvvzllbhllnldndbbqffbbgtgddbtdbbzttdptpccjnjppbllbzlblrlcllhrrhqhgqqbcqcvcdvvnnzfzvzttrptrrwmrmlrlddvttdbtdbdcdvccwlcwwhphmppwfppclpcllgqgnghhvfflfggrzrcchfhhrdhrdhdnhnmmhjjwqjjpmmwvmmdnmnzzqmqwwmtthtdhtthnnqhqdhqqndqqwffsbspbptpmmndnllsmmdhmhfhnhjhghshlslppbgpgngddlsljsjmmzqzhhswhssfzssfqqcmqcmqcmmqggjcjvvgssrccwddmpmwwdfdpdbdpdwdvvqfvfrvvvsbvbhvvmqqcjqqvzqzppncnhhqnnpgplpqqpjpbblpbbbshsthhvfhfmmqzmmznnvrvqrrwdrdlrlwlttzqttjvttqltqqnfqqqwjqwwqttfstftjffsqqnhhnsnqqhggbsgghfgglslmssqlqhlhthqhccdsspsnssshbbnmngnnhllwclcffqllsrszrssnqsqvqjvjcvcttqgqbqmmfqfsqfsqswwvcvffndnfdfvfcvvggsmsfmfwfpfwwzhznntgtlglmmlfmllwrlrwwhcchqchhznzjjcdjdbjjhcjcscwwlnnsgngqqtgqgngnwgnnhqnnhchmchhtchcnclcmccgffbmmzvvrnngwwvddzccnjntjtwjwwztwtmtddjddpsptpbpbvvbwwnlnmndmnmdnnclnnbsbddpfdfvvjtjqqtqqqzjzlzqllzzwwlppvfffpcffffprrncnnzsnznhhwvvqhqphpjjgqqvnnmdmqqglqlblgglrlsspscsjjpvpbpjjwccslsppdjpdjjwvjjmhjhtjjwqqbqjqzjqzqpqbbswwlssqzssbjjpjqjbbjcjpjspjssjjzhhhnjhnhbnhhwzhzwlcshqlqpzgggzmcwntcwmfgtrwwjdpnbdqqcgnzgbdrzdmpwgvtvqffqbpvjpjrcfswffllnvnwvhclpjcwqwgnwqwvwsfgflrgzzsswffwjdjgvdvlgmczcbthwbvhggwzwlzfmhvwvjpbpnhcczbgfhhgghsmjwnvnsvnvmqwstrgnncwbqgbqpgdngllcqnzgwswpgtwzgqzggnzsdgltrlqfctqfvlzdswccfpdtjbfnrbqsmpjclnplbmqbmvwbzzdflwbqrljvzjpcrmnqsmrpqlmfsgcmthqpwgwzvmrjnhqczljcpnzjbwzrhjrzmcqpmlbzhgmqrlzsjbjsvcmcngptzlrthwsrjrlmsrgjlzrvpzwmprwnpgvjtspsppfvwfwcvbnqcwwmzlbqthqmbnbmnsnzgsbbnqtrvhlzjhphclpjzrdblszrnftqgwwrhpznhjhgrncvsvrmtmmgssvzddjfrnrzhbrqrfffjvzrqdnrdbvjwgrvlcpbncfgczlwdggsjmwzhndcdbggjvwfljctjnsjwczwfdrfttbhnlswfdbpcnwpspdhnzwqbgdswwpccbpfpgmfmvvwpzbzqsbbjbfnhjpszcbnrdplmwtdjtpcsztdjcmczltnstzwlcdbtdhsdgsgtlvdfqggfmmrppjfrmtfwhpbjsppszjbhmthndqmvbmqcbtqsltwrcvlvblwspbgspjftwllzcmnsrvjpnstzrfmcflnhppsdfggwbzvnvlnjqlfvrlplnzvfrwvgcgqvnpfgtgchctvhcplclzmfpwgnfhqjgglfmsgpflqcpqmbbhwnvvdllcnhblpnndbdtmgvfbvvvlvzlrpfqmnvzbfrssjtlgcjtpfznshvdjrjnfshfcgvwcdbqlfsbhnzwmsgwhpbzttgfjsqgwvdmbdwjljhsndrbbzfrsqjhcbldzqpmtnfvnmzltjcrvrltwshnhqlnclmcnfpbzstsczlqmfmdftzfbcwqnhqppzfbzpbfjhmmtvtbmblmtshsbtjlvsqvmbmgstbbdmhprqmtpfdqqntmnlbmpsmwfgrvstjcllhwpcddnljdjvdrbwqmgrjnldpgnrhgqpzqrvwzsngrgnbpjnsffzjsbdptwnnfcqlscfhvggpfstsnqzcjbqqhgdpqsrlprcppgqmddpqpbnvgwtdqsbbgtvsqfrtqfsbdzhsztfmvwrrsjcbtcjgzrnhnpgldtwbwgmwbgmjjzsbbzlhgmlczrhjwtzrgwscmjvlstprldhglvftqzbtrmcwzgtjppbnjcdvjvcwvdbngnbrmjvvtnwdqfclbpgzcfnnnlnngtgmhsqsdmbjctjzjpbrwrhscqshmmwbtfnzjgsrjlnqqdsvdrjdzsdprphnfmwwcztqfcrjvnfhlvnqwbrfmcvhrbtgvcrqjjfcnzwmlfzzdcbbzvphhmsdltwjfdcgthpvszqzjdbfwrpvhbjqdhrscnvjhjvvcldnhgjclmzpbrrwnscgpcqrpdgsnjnwhctcdqgwqbrcszfzpmtdrhlftvwffdjrtznqrppqbdbwvzmtlpvsqqpcngjgfdrpngnspdwhhvlhqrtsphgqrlldggtrvqsprbfdmrpgcmqphdvjfmhlznpgtqlvtnllcdhzhhtjjlfvdlwhcrfmjmdjtmbllvsfgvmfqtqlmrlrjmqptszvjdpzhphppljnpjdjpwlrclssgdnstchhwhpflmlrtdqvqbbljrmnflrltzpqmgqfrczvfzrpfsrwsgpljvjfjdjdvjchcdmmtjgghqspwzdtwqgtvmnrrbfbgnhcrvnzznrdlqmgmdwmpwzlqdjtvpszwnjtjtmjqvfwvftlhgpvgzswpbvbllfcwpjnsmbhzrdpdzjsrpnhphdcqjmzvvhrjcwhgwjwcshqwzpbpmfnjjvqcjrqmvsrdrtdvfhwhrbpvrqrsfzflslqtdrtcsggtzmpvbszdgttlvpwwltvpcwqmnwqtpcfzgsvsmncvpqqdrljfwtncplmjlpfcnqmcctwzhrbmrfwvsrjsbnhjrjmrnbmmnnhsvlltwzzhsgwppnlmljgpcsmpchdjdzpgvrtwsfzffhnlbfmrldzbshvpqhnfzpwnvczgfvhbntcpztwqlfgtsmdhvcrgjhvqrhbpvbpzcpbgzrcfjztbnfjptbzfpztwprwf"

/* Solution for Part 1 */
function findStartOfPacketMarker(arr) {
    // set up temp array, includes each of first four letters in datastream buffer
    let fourChar = [];
    let index, duplicates;
    for (let i = 0; i < 4; i++) {
        fourChar.push(arr[i])
    }

    // for loop through datastream buffer (starting at 4)
    for (let i = 4; i < arr.length; i++) {

        // pop off first item in array
        fourChar.shift();

        // check if array.includes buffer[i], if so push buffer[i] to array
        if (fourChar.includes(arr[i])) {
            fourChar.push(arr[i])
            duplicates = 3;
        // if not, return i
        } else {
            if (!duplicates) {
                index = i;
                console.log(fourChar, DATASTREAM_BUFFER[index], index - 1)
                break;
            } else {
                duplicates--;
                fourChar.push(arr[i])
            }

        }
    }
    return index - 1;
}
findStartOfPacketMarker(DATASTREAM_BUFFER);

/* Solution for Part 2 */


// if (fourChar.includes(DATASTREAM_BUFFER[i])) {
    //         fourChar.push(DATASTREAM_BUFFER[i])
    //     } else {
    //         fourChar.push(DATASTREAM_BUFFER[i])
    //         unique = true;
    //     }