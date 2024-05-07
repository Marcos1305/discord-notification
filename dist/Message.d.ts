import { Embed } from "./Embed";
import { FieldInterface } from "./Field";
interface MessageInterface {
    content?: string | undefined;
    username?: string | undefined;
    avatar_url?: string | undefined;
    file?: string | undefined;
    embeds: Embed;
}
export declare abstract class Message implements MessageInterface {
    content?: string | undefined;
    username?: string | undefined;
    avatar_url?: string | undefined;
    image?: string | undefined;
    embeds: Embed;
    webhook: string;
    name: string;
    constructor(name: string, webhook: string);
    addContent: (content: string) => this;
    addUsername: (username: string) => this;
    addImage: (image: string) => this;
    addAvatarURl: (avatar_url: string) => this;
    setColor: (color: number | undefined) => this;
    addFooter: (footer: string) => this;
    /**
     * TODO: implements author
     *
     * @param author
     * @returns
     */
    addDescription: (description: string) => this;
    addTitle: (title: string) => this;
    addField: (field: FieldInterface) => this;
    buildPayload: () => any;
    sendMessage: () => Promise<import("axios").AxiosResponse<any, any>>;
}
export {};
//# sourceMappingURL=Message.d.ts.map